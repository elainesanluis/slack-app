import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/User';
import { ChannelInformation, Dropdown, Options, Tab, Tabs } from '../styles';
import useFetch from '../../hooks/useFetch';

export default function ChannelInfo({ selectedChannel }) {
	const { status, data } = useFetch('http://206.189.91.54/api/v1/users');
	const [channelInfo, setChannelInfo] = useState({});
	const [channelMembers, setChannelMembers] = useState([]);
	const [activeTab, setActiveTab] = useState('About');
	const [isAddNewMember, setIsAddNewMember] = useState(false);
	const [search, setSearch] = useState('');
	const [searchList, setSearchList] = useState(data);
	const { id } = selectedChannel;
	const {
		user: { expiry, uid, accessToken, client },
	} = useContext(UserContext);
	const params = {
		expiry: expiry,
		uid: uid,
		'access-token': accessToken,
		client: client,
	};
	const ownerInfo = data?.find(user => channelInfo?.owner_id === user.id);

	const options = {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
	};
	const date = new Date(channelInfo?.created_at).toLocaleDateString('en-US', options);

	const getChannelInfo = async () => {
		const {
			data: { data },
		} = await axios.get(`http://206.189.91.54/api/v1/channels/${id}`, { params });
		setChannelInfo(data);
	};

	const getMembersById = () => {
		const { channel_members } = channelInfo;
		const groupedMembers = data?.filter(user =>
			channel_members?.find(member => member.user_id === user.id)
		);
		setChannelMembers(groupedMembers);
	};

	const handleChangeTab = e => {
		setActiveTab(e.target.textContent);
	};

	const handleNewMembers = () => {
		setIsAddNewMember(true);
	};

	const handleSearch = e => {
		setSearch(e.target.value);
	};

	const handleAddMember = userID => {
		const body = {
			id: channelInfo.id,
			member_id: userID,
		};
		axios.post('http://206.189.91.54/api/v1/channel/add_member', body, { params });
		setSearch('');
		setIsAddNewMember(false);
	};

	useEffect(() => {
		getChannelInfo();
	}, [activeTab]);

	useEffect(() => {
		getMembersById();

		if (search === '') {
			setSearchList(data);
		} else {
			setSearchList(data.filter(user => user.uid.toLowerCase().match(search.toLowerCase())));
		}
	}, [data, search]);

	return (
		<ChannelInformation>
			<h3>{channelInfo.name}</h3>
			<Tabs>
				<li className={activeTab === 'About' ? 'active' : ''} onClick={e => handleChangeTab(e)}>
					About
				</li>
				<li className={activeTab === 'Members' ? 'active' : ''} onClick={e => handleChangeTab(e)}>
					Members
				</li>
			</Tabs>
			<Tab className={activeTab === 'About' ? 'active' : ''}>
				<h3>About This Channel</h3>
				<p>
					Owner: <span>{ownerInfo?.uid || 'Loading...'}</span>
				</p>
				<p>
					Date Created: <span>{date !== 'Invalid Date' && date}</span>
				</p>
				{!isAddNewMember && <button onClick={handleNewMembers}>+ Add Members</button>}
				{isAddNewMember && (
					<Dropdown>
						<input value={search} onChange={e => handleSearch(e)} />
						{search && (
							<Options>
								{status === 'idle' || status === 'fetching' ? (
									<div>Loading...</div>
								) : (
									searchList?.map(user => (
										<div key={user.id} onClick={() => handleAddMember(user.id)}>
											{user.uid}
										</div>
									))
								)}
							</Options>
						)}
					</Dropdown>
				)}
			</Tab>
			<Tab className={activeTab === 'Members' ? 'active' : ''}>
				<h3>Channel Members</h3>
				<ul>
					{channelMembers.length === 0 ? (
						<div>Loading ...</div>
					) : (
						channelMembers.map(member => <li key={member.id}>{member.uid}</li>)
					)}
				</ul>
			</Tab>
		</ChannelInformation>
	);
}
