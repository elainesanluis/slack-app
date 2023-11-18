import styled from 'styled-components';

export const Layout = styled.div`
	height: 100%;
`;
export const FlexContainer = styled.div`
	display: flex;
	color: #d1d2d3;
`;

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

// DASHBOARD
// TOPBAR
export const TopBarLayout = styled.div`
	height: 7vh;
	background-color: #19171d;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	padding: 1rem;
	color: #d1d2d3;
	svg {
		&:hover {
			cursor: pointer;
		}
	}
`;
export const Avatar = styled.div`
	width: 20px;
	height: 20px;
	border: 1px solid white;
`;

// SIDEBAR
export const SidebarStyles = styled.div`
	background-color: #19171d;
	height: 93vh;
	flex: 1;
	h2 {
		font-size: 1rem;
		padding-bottom: 0.5rem;
	}
	> div {
		border: 0.4px solid #d1d2d336;
	}
	> div:nth-child(2) {
		height: 90%;
		overflow: auto;
		border-top: none;
	}
`;

export const GroupName = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10%;
	padding: 2rem;
	h1 {
		font-size: 1.5rem;
	}
	svg {
		color: #212121;
		background-color: #d1d2d3;
		padding: 5px 10px;
		font-size: 40px;
		border-radius: 100%;
	}
`;

export const ChannelDMsLayout = styled.div`
	h2 {
		padding: 2rem 2rem 0.5rem;
	}

	a {
		color: #d1d2d3;
		text-decoration: none;
	}

	li {
		padding: 5px 2rem;
		display: flex;
		align-items: center;
		&:hover {
			background-color: #d1d2d336;
		}
	}
`;

export const DMsListItem = styled.li`
	position: relative;
	svg {
		display: none;
		width: 1.5rem;
		height: 1.5rem;
		font-size: 2rem;
		position: absolute;
		right: 10%;
	}

	:hover {
		svg {
			display: inline;
		}
	}
`;

export const Plus = styled.li`
	display: flex;
	align-items: center;
	svg {
		color: #d1d2d3;
		background-color: #212121;
		padding: 5px;
		font-size: 20px;
		margin-right: 10px;
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
// USER LIST

export const UserListForm = styled.form`
	border: 0.4px solid #d1d2d336;
	height: 100%;
	max-height: 76px;
	padding: 1rem;
`;

export const Dropdown = styled.div`
	height: 100%;
	max-height: 50px;
	position: relative;
	display: flex;
	align-items: flex-end;
	input {
		width: 100%;
		background: transparent;
		outline: none;
		border: none;
		padding: 0 1rem;
		color: #d1d2d3;
	}
`;

export const Options = styled.div`
	position: absolute;
	width: 90%;
	left: 5%;
	top: 150%;
	transform: translateY(-5%);
	color: #d1d2d3;
	background-color: #212121;
	z-index: 1;
	border: 0.4px solid #d1d2d336;
	height: 200px;
	overflow: auto;
	div {
		padding: 0.5rem 1rem;
		:hover {
			background-color: #1062f4;
		}
	}
`;

// LOGIN

export const FormLayout = styled(FlexContainer)`
	justify-content: center;
	align-items: center;
	background-color: #f6f6f6;
	height: 100vh;
	color: #000;
	div {
		background-color: #ffffff;
	}
`;

export const FormContainer = styled.div`
	padding: 3rem 8rem;
	flex-basis: 40%;
	box-shadow: 0px 1px 10px #e4e4e4;
	h1 {
		text-align: center;
		padding-bottom: 2rem;
	}
	p {
		margin-bottom: 10px;
	}
	div {
		margin-bottom: 5px;
	}
	input {
		width: 100%;
		margin-bottom: 5px;
		padding: 1rem;
		border: 1px solid #d1d2d3;
		border-radius: 3px;
	}
	button {
		margin-top: 10px;
		margin-bottom: 20px;
		width: 100%;
		padding: 1rem;
		border: 1px solid rgb(97, 148, 129);
		background-color: rgb(53, 120, 91);
		border-radius: 3px;
		font-weight: bold;
		color: #fff;
		font-size: 1rem;
	}
	a {
		display: block;
		text-align: center;
		color: rgb(90, 124, 171);
		text-decoration: none;
	}
`;

export const Errors = styled.p`
	color: red;
`;

// New Channel
export const NewChannelLayout = styled.div`
	width: 95%;
	margin: auto;
	padding: 2rem;
	> div {
		display: block;
		div {
			margin-bottom: 10px;
		}
	}
	label {
		width: 20%;
	}
	input {
		display: inline-block;
		width: auto;
		max-width: 100%;
	}
	span {
		margin-left: 10px;
		display: inline-flex;
		align-items: flex-end;
		> svg {
			margin-left: 5px;
			font-size: 16px;
		}
	}
	.members {
		position: static;
		transform: none;
		width: 100%;
		margin-top: 1rem;
	}
	button {
		padding: 5px 7px;
		border: 0.5px solid #d1d2d3;
		border-radius: 3px;
		outline: none;
		display: block;
		margin-left: auto;
		background: none;
		color: #d1d2d3;
		&:hover {
			background: #d1d2d3;
			color: rgb(29 29 29 / 100%);
		}
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
