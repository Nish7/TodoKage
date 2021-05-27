import { api } from '@/utils/fetcher';
import { mutate } from 'swr';

export const addTodo = async (newTodo) => {
	try {
		const response = await api.post('/todo', {
			body: JSON.stringify(newTodo),
		});

		console.log(response.data.todos);
		mutate('/api/todo');
	} catch (err) {
		console.log(err);
	}
};
