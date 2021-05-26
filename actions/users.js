import { api } from '@/utils/fetcher';
import { signOut } from 'next-auth/client';
import asyncHandler from '@/utils/asyncHandler';

// Todo: Error Handling Left
export const getUser = asyncHandler(async (id) => {
	const res = await api.get(`/user/${id}`);
	return res.data.user;
});

export const createUser = asyncHandler(async ({ email, name, id, picture }) => {
	const res = await api.post('/user', {
		body: JSON.stringify({ email, name, id, picture }),
	});
	return res.data.user;
});

export const deleteUser = asyncHandler(async () => {
	await api.delete('/user');
	await signOut();
});
