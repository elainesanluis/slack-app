import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/User';

import { BiSend } from 'react-icons/bi';
import { MessageBoxLayout } from '../styles';
import usePost from '../../hooks/usePost';

export default function MessageBox({ selectedUser, selectedChannel }) {
	const [messageBody, setMessageBody] = useState('');
	const [body, setBody] = useState({});
	const {
		user: { expiry, uid, accessToken, client },
	} = useContext(UserContext);

	const headers = {
		expiry: expiry,
		uid: uid,
		'access-token': accessToken,
		client: client,
	};
	
	const { res, handleSubmit} = usePost('http://206.189.91.54/api/v1/messages', body, headers)

	const handleChange = e => {
		setMessageBody(e.target.value);
	};

	useEffect(() => {
		if (selectedUser?.id) {
			setBody({
				receiver_id: selectedUser.id,
				receiver_class: 'User',
				body: messageBody,
			});
		} else if (selectedChannel?.id) {
			setBody({
				receiver_id: selectedChannel.id,
				receiver_class: 'Channel',
				body: messageBody,
			});
		}
	}, [selectedUser, selectedChannel, messageBody]);

	useEffect(() => {
		if (res) {
			setMessageBody('')
		}
	}, [res])

	return (
		<>
			<MessageBoxLayout onSubmit={e => handleSubmit(e)}>
				<textarea value={messageBody} onChange={handleChange}></textarea>
				<button type="submit">
					<BiSend />
				</button>
			</MessageBoxLayout>
		</>
	);
}
