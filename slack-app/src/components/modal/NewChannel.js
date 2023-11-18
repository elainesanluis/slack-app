import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/User';
import { Dropdown, Errors, NewChannelLayout, Options } from '../styles';
import { IoIosClose } from 'react-icons/io';
import useFetch from '../../hooks/useFetch';

export default function NewChannel() {
	const { status, data } = useFetch('http://206.189.91.54/api/v1/users');
	const [channelName, setChannelName] = useState('');
	const [filter, setFilter] = useState('');
	const [filterList, setFilterList] = useState(data);
	const [memberDisplay, setMemberDisplay] = useState([]);
	const [errors, setErrors] = useState(false);
	const [errorMessage, setErrorMessage] = useState([]);
	const [channelInfo, setChannelInfo] = useState({
		name: '',
		user_ids: [],
	});
	const {
		user: { expiry, uid, accessToken, client },
	} = useContext(UserContext);
	const params = {
		expiry: expiry,
		uid: uid,
		'access-token': accessToken,
		client: client,
	};

	const handleFilter = e => {
		setFilter(e.target.value);
	};

	const handleChannelName = e => {
		setChannelName(e.target.value);
	};

	const handleClick = e => {
		setFilter('');
		const [{ id, uid }] = data.filter(user => user.uid.includes(e.target.innerText));
		const members = channelInfo.user_ids;
		if (!members.includes(id)) {
			members.push(id);
			setChannelInfo({
				...channelInfo,
				user_ids: members,
			});
			setMemberDisplay(prevMembers => [...prevMembers, { id, uid }]);
		}
	};

	const handleDelete = id => {
		const deletedDisplay = memberDisplay.filter(member => member.id !== id);
		setMemberDisplay(deletedDisplay);
		const deletedInfo = channelInfo.user_ids.filter(user => user !== id);
		setChannelInfo({
			...channelInfo,
			user_ids: deletedInfo,
		});
	};

	const handleCreateChannel = e => {
		e.preventDefault();

		axios
			.post('http://206.189.91.54/api/v1/channels', channelInfo, { params })
			.then(response => {
				if (response.data.errors) {
					setErrors(true);
					setErrorMessage(response.data.errors);
				} else {
					setErrors(false);
					setChannelName('');
					setMemberDisplay([]);
				}
			})
			.catch(error => console.log(error));
	};

	useEffect(() => {
		if (filter === '') {
			setFilterList(data);
		} else {
			setFilterList(data.filter(user => user.uid.includes(filter)));
		}
	}, [data, filter]);

	useEffect(() => {
		setChannelInfo({
			...channelInfo,
			name: channelName,
		});
	}, [channelName, channelInfo]);

	return (
		<NewChannelLayout>
			<Dropdown>
				<form onSubmit={e => handleCreateChannel(e)}>
					<div>
						<label>Channel Name:</label>
						<input type="text" value={channelName} onChange={e => handleChannelName(e)} />
					</div>
					<div>
						<label>Members:</label>
						{memberDisplay.map(({ id, uid }) => (
							<span key={id}>
								<span>{uid}</span> <IoIosClose onClick={() => handleDelete(id)} />,{' '}
							</span>
						))}
						<input type="text" value={filter} onChange={e => handleFilter(e)} />
					</div>
					<Options className="members">
						{status === 'idle' || status === 'fetching' ? (
							<div>Loading...</div>
						) : (
							filterList.map(user => (
								<div key={user.uid} onClick={handleClick}>
									{user.uid}
								</div>
							))
						)}
					</Options>
					{errors && errorMessage.map((message, index) => <Errors key={index}>{message}</Errors>)}
					<button type="submit">Create Channel</button>
				</form>
			</Dropdown>
		</NewChannelLayout>
	);
}
