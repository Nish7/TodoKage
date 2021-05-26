import { getUser, createUser } from '@/actions/users';

export const signIn = async (user, account, profile) => {
	const { email, name, id, picture } = profile;
	const dbUser = await getUser(id);

	if (!dbUser) {
		// The Email Authorization
		// if (email.endsWith !== '@fountainheadschools.org') {
		// 	return false;
		// }

		await createUser({ email, name, id, picture });
	}

	return true;
};

export const jwt = async (token, user, account, profile, isNewUser) => {
	if (user) {
		token = { id: profile.id };
	}
	return token;
};

export const session = async (session, token) => {
	const user = await getUser(token.id);

	if (!user) {
		return null;
	}

	session.user = user;
	return session;
};
