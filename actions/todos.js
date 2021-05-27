import { api } from '@/utils/fetcher';
import { mutate } from 'swr';

export const addTodo = async (newTodo) => {
	try {
		await api.post('/todo', {
			body: JSON.stringify(newTodo),
		});

		mutate('/api/todo');
	} catch (err) {
		console.log(err);
	}
};

export const editTodo = async (newTodo, _id) => {
	try {
		await api.put(`/todo/${_id}`, {
			body: JSON.stringify(newTodo),
		});

		mutate('/api/todo');
	} catch (err) {
		console.log(err);
	}
};

export const deleteTodo = async (_id) => {
	try {
		await api.delete(`/todo/${_id}`);
		mutate('/api/todo');
	} catch (err) {
		console.log(err);
	}
};
