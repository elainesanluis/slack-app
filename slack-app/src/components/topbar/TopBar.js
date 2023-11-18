import React, { useContext } from 'react';
import { UserContext } from '../../contexts/User';
import { TopBarLayout } from '../styles';
import { MdLogout } from 'react-icons/md';

export default function TopBar() {
	const { handleLogout } = useContext(UserContext);

	const handleClick = () => {
		handleLogout();
	};
	return (
		<TopBarLayout>
			<MdLogout onClick={handleClick}></MdLogout>
		</TopBarLayout>
	);
}
