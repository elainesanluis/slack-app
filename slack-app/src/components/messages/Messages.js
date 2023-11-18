import React, { useContext, useEffect, useState } from 'react';
import { MessageContainer } from '../styles';
import Title from './Title';
import SentMessages from './SentMessages';
import MessageBox from './MessageBox';
import { UserContext } from '../../contexts/User';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export default function Messages({
	isNewMessage,
	setIsNewMessage,
	setIsModalShow,
	setIsChannelInfo,
	setSelectedChannel,
	selectedChannel,
}) {
	const {
		user: { receivers },
	} = useContext(UserContext);
	const [selectedUser, setSelectedUser] = useState('');
	const { status, data } = useFetch('http://206.189.91.54/api/v1/channels');
	const { id } = useParams();

	useEffect(() => {
		setSelectedUser(receivers?.find(receiver => receiver.id === parseInt(id)));
		setSelectedChannel(data?.find(channel => channel.id === parseInt(id)));
	}, [receivers, data, id, setSelectedChannel]);

	return (
		<MessageContainer>
			{status === 'idle' || status === 'fetching' ? (
				<div>Loading...</div>
			) : (
				<>
					<Title
						isNewMessage={isNewMessage}
						setIsNewMessage={setIsNewMessage}
						selectedUser={selectedUser}
						selectedChannel={selectedChannel}
						setIsModalShow={setIsModalShow}
						setIsChannelInfo={setIsChannelInfo}
					/>
					<SentMessages
						selectedUser={selectedUser}
						selectedChannel={selectedChannel}
					/>
					<MessageBox
						selectedUser={selectedUser}
						selectedChannel={selectedChannel}
					/>
				</>
			)}
		</MessageContainer>
	);
}
