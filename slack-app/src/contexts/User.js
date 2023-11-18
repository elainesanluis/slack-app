import { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
	const [user, setUser] = useState({
		isLoggedIn: false,
	});

	const handleLogin = (uid, accessToken, client, userEmail, expiry) => {
		setUser({
			uid,
			accessToken,
			client,
			currentUser: userEmail,
			expiry,
			isLoggedIn: true,
			receivers: []
		});
	};

	const handleLogout = () => {
		setUser({
			uid: '',
			accessToken: '',
			client: '',
			currentUser: '',
			expiry: '',
			isLoggedIn: false,
			receivers: []
		});
	};

	const handleSettingReceivers = (id, email) => {
		const updatedReceivers = user.receivers;
		if (!updatedReceivers.includes(id)) {
			updatedReceivers.push({
				id,
				email,
			});
		}
		setUser({
			...user,
			receivers: updatedReceivers,
		});
	};

	const handleUpdateReceivers = newReceivers => {
		setUser({
			...user,
			receivers: newReceivers,
		});
	};

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('user'));
		setUser(userData);
	}, []);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	return (
		<UserContext.Provider
			value={{ user, handleLogin, handleLogout, handleSettingReceivers, handleUpdateReceivers }}>
			{children}
		</UserContext.Provider>
	);
}

export { UserContextProvider, UserContext };
