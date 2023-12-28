import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/User';
import { MessagesStyles, MessageLayout } from '../styles';
import Message from './Message';

export default function SentMessages({ selectedUser, selectedChannel }) {
	const [messagesData, setMessagesData] = useState([]);
	const {
		user: { expiry, uid, accessToken, client },
	} = useContext(UserContext);

	const getMessages = async (id, receiver, params) => {
		let {
			data: { data },
		} = await axios.get(
			`http://206.189.91.54/api/v1/messages?receiver_id=${id}&receiver_class=${receiver}`,
			{ params }
		);
		setMessagesData(data)
	};

	const options = {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
	};

	const messages = messagesData?.reduce((filteredMessages, message) => {
		const date = message => new Date(message).toLocaleDateString('en-US', options);
		if (!filteredMessages[date(message?.created_at)]) {
			filteredMessages[date(message?.created_at)] = [message];
		} else {
			filteredMessages[date(message?.created_at)].push(message);
		}
		return filteredMessages;
	}, {});

	let newMessages;
	if (messages !== undefined || null) {
		newMessages = Object.keys(messages).map(date => {
			return {
				date,
				messages: messages[date],
			};
		});
	}

	useEffect(() => {
		const params = {
			expiry: expiry,
			uid: uid,
			'access-token': accessToken,
			client: client,
		};

		const interval = setInterval(() => {
			if (selectedUser) {
				getMessages(selectedUser.id, 'User', params);
			} else {
				getMessages(selectedChannel?.id, 'Channel', params);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [selectedUser, selectedChannel, expiry, uid, accessToken, client]);

	return (
		<MessagesStyles>
			<MessageLayout>
				<h3>This is the start of your messages</h3>
			</MessageLayout>
			{newMessages?.length > 0 &&
				newMessages.map(message => <Message key={message.date} message={message} />)}
		</MessagesStyles>
	);
}
