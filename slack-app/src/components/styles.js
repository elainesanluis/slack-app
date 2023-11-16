import styled from 'styled-components';

export const ModalStyles = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgb(29 29 29 / 50%);
	position: absolute;
	top: 0;
	left: 0;
	> div {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #292929;
		width: 60%;
		height: 60vh;
		border-radius: 10px;
	}
	&.display-block {
		display: block;
	}
	&.display-none {
		display: none;
	}
`;

// MESSAGES
export const MessageContainer = styled.div`
	background-color: #212121;
	height: 93vh;
	flex: 4;
`;

export const MessageTitle = styled.div`
	height: 10%;
`;

export const TitleContainer = styled.div`
	border-top: 0.4px solid #d1d2d336;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	svg {
		&:hover {
			cursor: pointer;
		}
	}
`;

export const MessagesStyles = styled.div`
	height: 70%;
	overflow: auto;
`;

export const MessageLayout = styled.div`
	padding: 2rem;
	position: relative;
	border-top: 1px solid #d1d2d336;
	> span {
		position: absolute;
		top: -1rem;
		left: 50%;
		transform: translateX(-50%);
		border: 1px solid #d1d2d336;
		padding: 10px 15px;
		border-radius: 20px;
		font-weight: bold;
		font-size: 12px;
		background-color: #212121;
	}

	h5 {
		margin-bottom: 10px;
	}
	> div {
		display: flex;
		margin-bottom: 15px;
		> img {
			margin-right: 15px;
		}
	}
`;

export const MessageBoxLayout = styled.form`
	border: 1px solid #d1d2d336;
	border-radius: 10px;
	height: 15%;
	width: 90%;
	margin: auto;
	position: relative;
	padding: 1rem;

	textarea {
		width: 100%;
		height: 80%;
		display: block;
		background-color: transparent;
		border: none;
		resize: none;
		color: #d1d2d3;
		font-family: sans-serif;
		outline: none;
	}

	button {
		position: absolute;
		bottom: 0;
		right: 10px;
		border: none;
		color: #d1d2d3;
		font-size: 25px;
		background-color: transparent;
	}
`;

// Channel Information
export const ChannelInformation = styled.div`
	padding: 2rem;
	ul {
		list-style-type: none;
	}
`;

export const Tabs = styled.ul`
	display: flex;
	margin: 10px 0 20px;
	position: relative;
	padding-bottom: 10px;
	&:after {
		content: '';
		display: block;
		width: 100%;
		height: 0.5px;
		background-color: #d1d2d3;
		position: absolute;
		left: 0;
		bottom: 5px;
	}
	li {
		margin-right: 20px;
		position: relative;
		&:hover {
			cursor: pointer;
		}
		&.active {
			&:after {
				content: '';
				display: block;
				position: absolute;
				width: 100%;
				height: 2px;
				background-color: green;
				z-index: 2;
				bottom: -6px;
			}
		}
	}
`;

export const Tab = styled.div`
	display: none;
	&.active {
		display: block;
	}

	h3,
	p,
	li {
		margin-bottom: 10px;
	}

	button {
		border: none;
		color: #d1d2d3;
		background: none;
	}

	input {
		display: block;
		max-width: 100%;
		background-color: transparent;
		outline: none;
		border: none;
		border-bottom: 0.5px solid #d1d2d3;
		margin-top: 10px;
		color: #d1d2d3;
	}
`;
