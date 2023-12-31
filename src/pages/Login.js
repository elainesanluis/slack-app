import React, { useState, useContext, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Errors } from '../components/styles';
import { UserContext } from '../contexts/User';
import usePost from '../hooks/usePost';
import styled from 'styled-components';

export default function Login() {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState([]);
	const { res, errors, handleSubmit } = usePost(
		'http://206.189.91.54/api/v1/auth/sign_in',
		userInfo
	);
	const { user, handleLogin } = useContext(UserContext);

	const handleChange = e => {
		setErrorMessage([]);
		const key = e.target.id;
		const value = e.target.value;
		setUserInfo({
			...userInfo,
			[key]: value,
		});
	};

	useEffect(() => {
		if (res?.data && res?.headers) {
			const {
				data: {
					data: { email, uid },
				},
				headers: { 'access-token': accessToken, client, expiry },
			} = res;
			handleLogin(uid, accessToken, client, email, expiry);
		}
		setErrorMessage(errors);
	}, [res, errors, handleLogin]);

	if (user?.isLoggedIn) {
		return <Navigate to="/app" />;
	}

	return (
		<LoginContainer>
        <LoginInnerContainer>
		<img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' alt=''/>
				<h1>Sign In to Workspace</h1>
				<p>
					Enter your <span>email</span> and <span>password</span>
				</p>
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type="email"
							id="email"
							aria-label="Email"
							placeholder="Email"
							value={userInfo.email}
							onChange={handleChange}
						/>
					</div>
					<div>
						<input
							type="password"
							id="password"
							aria-label="Password"
							placeholder="Password"
							value={userInfo.password}
							onChange={handleChange}
						/>
						{errorMessage?.map((message, index) => (
							<Errors key={index}>{message}</Errors>
						))}
					</div>
					<button type="submit">Sign In</button>
				</form>
				<Link to="/signup">Create an account</Link>
        </LoginInnerContainer>
		</LoginContainer>
	);
}

const LoginContainer = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: flex;
flex-direction: column;
place-items: center;
`;

const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

>img {
  object-fit: contain;
  height: 100px;
  margin-bottom: 40px;
}
`;


