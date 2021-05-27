import { api } from '@/utils/fetcher';
import { signOut } from 'next-auth/client';

export const getUser = async (id) => {
	try {
		const res = await api.get(`/user/${id}`);
		return res.data.user;
	} catch (err) {
		console.log(err);
	}
};

export const createUser = async ({ email, name, id, picture }) => {
	try {
		const res = await api.post('/user', {
			body: JSON.stringify({ email, name, id, picture }),
		});
		return res.data.user;
	} catch (err) {
		console.log(err);
	}
};

export const deleteUser = async () => {
	try {
		await api.delete('/user');
		await signOut();
	} catch (err) {
		console.log(err);
	}
};
