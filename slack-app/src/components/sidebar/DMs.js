import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ChannelDMsLayout, DMsListItem } from '../styles';
import { IoIosClose } from 'react-icons/io';
import { UserContext } from '../../contexts/User';

export default function DMs() {
	const {
		user: { receivers },
		handleUpdateReceivers,
	} = useContext(UserContext);
	const navigate = useNavigate();

	const handleClose = (e, id) => {
		e.preventDefault();
		const removeReceiver = receivers.filter(receiver => receiver.id !== id);
		handleUpdateReceivers(removeReceiver);
		if (receivers.length === 1) {
			navigate('/app');
		} else {
			navigate(`${removeReceiver[removeReceiver.length - 1].id}`);
		}
	};

	return (
		<ChannelDMsLayout>
			<h2>Direct Messages</h2>
			<ul>
				{receivers?.map(user => (
					<Link to={`/app/${user.id}`} key={user.id}>
						<DMsListItem>
							{user.email} <IoIosClose className="close" onClick={e => handleClose(e, user.id)} />
						</DMsListItem>
					</Link>
				))}
			</ul>
		</ChannelDMsLayout>
	);
}
