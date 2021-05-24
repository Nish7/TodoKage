import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { signIn, jwt, session } from '@/lib/authCallbacks';

const providers = [
	Providers.Google({
		clientId: process.env.GOOGLE_ID,
		clientSecret: process.env.GOOGLE_SECRET,
	}),
];

const callbacks = { signIn, jwt, session };

const pages = {
	// signIn: '/auth/signin',
	// signOut: '/auth/signout',
	error: '/',
	// verifyRequest: '/auth/verify-request',
	// newUser: null,
};

export default NextAuth({
	providers,
	secret: process.env.AUTH_SECRET,
	pages,
	callbacks,
	debug: false,
});
