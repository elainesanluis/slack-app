import axios from 'axios';
import { useState } from 'react';

export default function usePost(url, info, headers = '') {
	const [res, setRes] = useState({});
	const [errors, setErrors] = useState([]);
	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post(url, info, { headers })
			.then(response => setRes(response))
			.catch(err => {
				const {
					data: { errors },
				} = err.response;
                setErrors(errors)
			});
	};

	return { res, errors, handleSubmit };
}
