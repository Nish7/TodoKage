import Head from 'next/head';
import useSWR from 'swr';
import { VStack, Text, Button } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';

import { addTodo } from '@/actions/todos';

export default function Home() {
	const { data, error, isValidating } = useSWR('/api/todo');
	const todos = data?.data;

	const [session, loading] = useSession();

	return (
		<>
			<Head>
				<title>TodoKage</title>
			</Head>

			<main>
				<VStack>
					<Text textStyle='h1' as='h1'>
						Welcome to TodoKage
					</Text>

					<Text>{todos}</Text>

					<Text textStyle='h1'>API Testing</Text>

					{session && !loading ? (
						<Button onClick={addTodo}>Add Todo</Button>
					) : null}
				</VStack>
			</main>
		</>
	);
}
