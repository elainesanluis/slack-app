import React from 'react';
import { Link } from 'react-router-dom';

import { BsPlus, BsHash } from 'react-icons/bs';
import { ChannelDMsLayout, Plus } from '../styles';
import useFetch from '../../hooks/useFetch';

export default function Channels({ setIsModalShow }) {
	const { status, data } = useFetch('http://206.189.91.54/api/v1/channels');

	const handleNewChannel = () => {
		setIsModalShow(true);
	};

	return (
		<ChannelDMsLayout>
			<h2>Channels</h2>
			<ul>
				{status === 'idle' || status === 'fetching' ? (
					<li>Loading Channels</li>
				) : (
					data?.map(channel => {
						return (
							<Link key={channel.id} to={`/app/${channel.id}`}>
								<li>
									<BsHash /> {channel.name}
								</li>
							</Link>
						);
					})
				)}
				<Plus onClick={handleNewChannel}>
					<BsPlus className="plus" /> Add channels
				</Plus>
			</ul>
		</ChannelDMsLayout>
	);
}
