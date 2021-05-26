import Head from 'next/head';
import useSWR from 'swr';
import { Heading, Text, Button, Flex, VStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';

import { addTodo } from '@/actions/todos';
import { deleteUser } from '@/actions/users';
import { api } from '@/utils/fetcher';

export default function Home() {
	const { data, error, isValidating } = useSWR('/api/todo');
	const todos = data?.data;

	const [session, loading] = useSession();

	return (
		<>
			<Head>
				<title>TodoKage</title>
			</Head>

			<Flex justifyContent='center' flexDirection='column' alignItems='center'>
				<Heading as='h1'>Welcome to TodoKage</Heading>

				<Text>{todos}</Text>

				<Text textStyle='h1' my={5}>
					API Testing
				</Text>

				{session ? (
					<VStack>
						<Button
							isLoading={loading}
							disabled={loading}
							onClick={() => addTodo()}>
							Add Todo
						</Button>

						<Button isLoading={loading} disabled={loading} onClick={deleteUser}>
							Delete User
						</Button>
					</VStack>
				) : null}
			</Flex>
		</>
	);
}
