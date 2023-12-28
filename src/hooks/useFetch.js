import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/User';

export default function useFetch(url) {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState([]);
	const {
		user: { expiry, uid, accessToken, client },
	} = useContext(UserContext);
	
	useEffect(() => {
		const params = {
			expiry: expiry,
			uid: uid,
			'access-token': accessToken,
			client: client,
		};
		if (!url) return;

		const fetchData = async () => {
			setStatus('fetching');
			let {
				data: { data },
			} = await axios.get(url, { params }).catch(err => setError(err));
			setData(data);
			setStatus('fetched');
		};

		fetchData();
	}, [url, expiry, uid, accessToken, client]);

	return { status, data, error };
}
