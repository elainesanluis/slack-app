import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import usePost from './usePost';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function SignUp() {
  const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
		password_confirmation: '',
	});
	const [errorMessage, setErrorMessage] = useState([]);
	const { res, errors, handleSubmit } = usePost('http://206.189.91.54/api/v1/auth', userInfo);

	const navigate = useNavigate();

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
		if (res?.data?.status === 'success') {
			navigate('/');
		}
		setErrorMessage(errors.full_messages);
	}, [res, errors, navigate]);

  return (
    <SignUpContainer>
    <SignUpInnerContainer>
    <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' alt=''/>
    <h1>Sign Up</h1>
				<p>
					Create an account using your <span>email</span>
				</p>
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type="email"
							id="email"
							aria-label="Email"
							aria-required="true"
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
							aria-required="true"
							placeholder="Password"
							value={userInfo.password}
							onChange={handleChange}
						/>
					</div>
					<div>
						<input
							type="password"
							id="password_confirmation"
							aria-label="Password Confirmation"
							aria-required="true"
							placeholder="Password Confirmation"
							value={userInfo.password_confirmation}
							onChange={handleChange}
						/>
						{errorMessage?.map((message, index) => (
							<Errors key={index}>{message}</Errors>
						))}
					</div>
					<button type="submit">Sign Up</button>
				</form>
				<Link to="/">Already have an account? Login</Link>
        </SignUpInnerContainer>
        </SignUpContainer>
  );
}

export default SignUp;

const SignUpContainer = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: flex;
flex-direction: column;
place-items: center;
`;

const SignUpInnerContainer = styled.div`
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

const Errors = styled.p`
	color: red;
`;
