import Head from 'next/head';
import useSWR from 'swr';

import { VStack, Text } from '@chakra-ui/react';

function Loading() {
	return <h1>Loading</h1>;
}

export default function Home() {
	const { data, error: serverError, isValidating } = useSWR('/api/todo');
	const todos = data?.data;

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

					{isValidating ? <Loading /> : <Text> {todos} </Text>}
				</VStack>
			</main>
		</>
	);
}
