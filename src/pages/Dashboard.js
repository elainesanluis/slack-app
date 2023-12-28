import React, { useState, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../contexts/User';

import { FlexContainer, MessageContainer } from '../components/styles';
import Sidebar from '../components/sidebar/Sidebar';
import Messages from '../components/messages/Messages';
import TopBar from '../components/topbar/TopBar';
import Title from '../components/messages/Title';
import Modal from '../components/modal/Modal';
import NewChannel from '../components/modal/NewChannel';
import ChannelInfo from '../components/modal/ChannelInfo';

export default function Dashboard() {
	const {
		user: { isLoggedIn },
	} = useContext(UserContext);
	const [selectedChannel, setSelectedChannel] = useState({});
	const [isNewMessage, setIsNewMessage] = useState(false);
	const [isModalShow, setIsModalShow] = useState(false);
	const [isChannelInfo, setIsChannelInfo] = useState(false);

	if (!isLoggedIn) {
		return <Navigate to="/" />;
	}

	return (
		<>
			<TopBar />
			<FlexContainer>
				<Sidebar setIsNewMessage={setIsNewMessage} setIsModalShow={setIsModalShow} />
				<Routes>
					<Route
						path="/:id"
						element={
							<Messages
								isNewMessage={isNewMessage}
								setIsNewMessage={setIsNewMessage}
								setIsModalShow={setIsModalShow}
								setIsChannelInfo={setIsChannelInfo}
								selectedChannel={selectedChannel}
								setSelectedChannel={setSelectedChannel}
							/>
						}
					/>
					<Route
						path="/"
						element={
							<MessageContainer>
								<Title isNewMessage={isNewMessage} setIsNewMessage={setIsNewMessage} />
							</MessageContainer>
						}
					/>
				</Routes>
				<Modal
					isModalShow={isModalShow}
					setIsModalShow={setIsModalShow}
					setIsChannelInfo={setIsChannelInfo}>
					{isChannelInfo ? <ChannelInfo selectedChannel={selectedChannel} /> : <NewChannel />}
				</Modal>
			</FlexContainer>
		</>
	);
}
