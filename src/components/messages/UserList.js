import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/User';
import { Dropdown, Options, UserListForm } from '../styles';

export default function UserList({ allUsers, status, setIsNewMessage }) {
	const [search, setSearch] = useState('');
	const [searchList, setSearchList] = useState(allUsers);
	const { handleSettingReceivers } = useContext(UserContext);
	const navigate = useNavigate();

	const handleSearch = e => {
		setSearch(e.target.value);
	};

	const formSubmit = (id, email) => {
		handleSettingReceivers(id, email);
		setIsNewMessage(false);
		navigate(`/app/${id}`);
	};

	const handleClick = ({ id, email }) => {
		formSubmit(id, email);
	};

	useEffect(() => {
		if (search === '') {
			setSearchList(allUsers);
		} else {
			setSearchList(allUsers.filter(user => user.uid.toLowerCase().match(search.toLowerCase())));
		}
	}, [search, allUsers]);

	return (
		<UserListForm>
			<Dropdown>
				<label>To:</label>
				<input type="text" value={search} onChange={handleSearch} autoComplete="off" />
				{
					<Options>
						{status === "idle" || status === "fetching" ? (
							<div>
								<h3>Loading...</h3>
							</div>
						) : (
							searchList.map(user => (
								<div key={user.id} onClick={() => handleClick(user)}>
									{user.uid}
								</div>
							))
						)}
					</Options>
				}
			</Dropdown>
		</UserListForm>
	);
}
