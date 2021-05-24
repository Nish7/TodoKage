import { useSession, signIn, signOut } from 'next-auth/client';
import { Text, Button, Flex, Avatar } from '@chakra-ui/react';

import ModeButton from '@/components/ui/ModeButton';

function Navbar() {
	const [session] = useSession();
	const user = session?.user;
	const { picture, name } = user || {};

	return (
		<Flex alignItems='center' justifyContent='center' my={6}>
			{!session ? (
				<Button bg='brand' color='white' onClick={() => signIn('google')}>
					Sign in using Google
				</Button>
			) : (
				<Button bg='red.400' color='white' onClick={() => signOut()}>
					Sign out
				</Button>
			)}

			{session && (
				<Flex alignItems='center'>
					<Text as='h3' textStyle='h3' mx={3}>
						{session ? `Logged in as ${name}` : 'Not Logged in'}
					</Text>

					<Avatar src={picture} name={name} size='sm' />
				</Flex>
			)}

			<ModeButton />
		</Flex>
	);
}

export default Navbar;
