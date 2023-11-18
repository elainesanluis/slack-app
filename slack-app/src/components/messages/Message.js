import React from 'react';
import { MessageLayout } from '../styles';

export default function Message({ message }) {
	const { date, messages } = message;

	return (
		<MessageLayout>
			<span>{date}</span>
			{messages.map(mess => {
				return (
					<div key={mess.id}>
						<img
							src={`https://avatars.dicebear.com/api/initials/${mess.sender.uid.charAt(
								0
							)}.svg?size=60`}
							alt={mess.sender.uid}
						/>
						<div>
							<h5>{mess.sender.uid}</h5>
							<p>{mess.body}</p>
						</div>
					</div>
				);
			})}
		</MessageLayout>
	);
}
