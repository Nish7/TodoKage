import axios from 'axios';

export default function fetcher(url) {
	return axios.get(url).then((res) => res.data);
}

export const api = axios.create({ baseURL: 'http://localhost:3000/api' });
