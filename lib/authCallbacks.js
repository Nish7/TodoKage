import User from '@/models/User';
import dbConnect from '@/utils/dbConnect';

export const signIn = async (user, account, profile) => {
	await dbConnect();

	const { email, name, id, picture } = profile;

	const dbUser = await User.find({ email: user.email });

	if (dbUser.length === 0) {
		// todo: The Email Authorization
		// if (email.endsWith !== '@fountainheadschools.org') {
		// 	return false;
		// }

		await User.create({
			name,
			email,
			picture,
			googleId: id,
		});
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
	await dbConnect();

	const user = await User.find({ googleId: token.id });

	if (user.length === 0) {
		return null;
	}

	session.user = user[0];
	return session;
};
