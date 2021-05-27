import {
	Box,
	Divider,
	Tag,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';

function Todo({ task, date, _id, tags }) {
	const bg = useColorModeValue('gray.100', '#3F454E');
	const tagBg = useColorModeValue('gray.300', 'white');
	const tagColor = useColorModeValue('white', 'gray.700');
	const color = useColorModeValue('black', 'white');

	return (
		<Box bg={bg} rounded='xl' boxShadow='md' p='5' w='full'>
			<Text color='gray.400' fontSize='xs'>
				{_id}
			</Text>
			<Text fontSize='xl' color={color} fontWeight='bold'>
				{task}
			</Text>
			<Text color='gray.400' fontSize='md'>
				{format(new Date(date), 'Pp')}
			</Text>

			<Divider my='3' />

			{tags.map((tag, i) => (
				<Tag
					size='md'
					key={i}
					variant='solid'
					bg={tagBg}
					mx='1'
					color={tagColor}>
					{tag}
				</Tag>
			))}
		</Box>
	);
}

export default Todo;
