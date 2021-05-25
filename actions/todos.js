import axios from 'axios';
import { mutate } from 'swr';

export const addTodo = async () => {
	try {
		const response = await axios.post('/api/todo');
		console.log(response.data.session);
		mutate('/api/todo');
	} catch (err) {
		console.log(err);
	}
};
