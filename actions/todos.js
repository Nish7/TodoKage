import { api } from '@/utils/fetcher';
import { mutate } from 'swr';
import asyncHandler from '@/utils/asyncHandler';

export const addTodo = asyncHandler(async () => {
	const response = await api.post('/todo');
	console.log(response.data.session);
	mutate('/api/todo');
});
