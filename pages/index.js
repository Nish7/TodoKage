import Head from 'next/head';
import useSWR from 'swr';
import { Heading, Text, Button, Flex, VStack } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';

import { addTodo } from '@/actions/todos';
import Todo from '@/components/todos/Todo';
import DialogButton from '@/components/ui/Buttons/DeleteUserButton';

const newTodo = {
	task: 'Clean Dishes!',
	tags: ['Chores', 'Boring'],
};

export default function Home() {
	const [session, loading] = useSession();

	const { data, error, isValidating } = useSWR(session ? '/api/todo' : null);
	console.log(data);
	const todos = data?.todos || [];

	return (
		<>
			<Head>
				<title>TodoKage</title>
			</Head>

			<Flex justifyContent='center' flexDirection='column' alignItems='center'>
				<Heading as='h1'>Welcome to TodoKage</Heading>

				<VStack my='5' spacing='4' w={['90%', '90%', '30%']}>
					{todos.map((todo, i) => (
						<Todo key={i} {...todo} />
					))}
				</VStack>

				{session ? (
					<>
						<Text textStyle='h1' my={5}>
							API Testing
						</Text>

						<VStack>
							<Button
								isLoading={loading}
								disabled={loading}
								onClick={() => addTodo(newTodo)}>
								Add Todo
							</Button>

							<DialogButton />
						</VStack>
					</>
				) : null}
			</Flex>
		</>
	);
}
