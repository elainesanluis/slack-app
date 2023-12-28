import React from 'react';

import { ModalStyles } from '../styles';

export default function Modal({ children, isModalShow, setIsModalShow, setIsChannelInfo }) {
	const handleCloseModal = e => {
		if (e.target.id === 'overlay') {
			setIsModalShow(false);
			setIsChannelInfo(false);
		}
	};
	return (
		<ModalStyles
			id="overlay"
			className={isModalShow ? 'display-block' : 'display-none'}
			onClick={e => handleCloseModal(e)}>
			<div id="modal">{children}</div>
		</ModalStyles>
	);
}
