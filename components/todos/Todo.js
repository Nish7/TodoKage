import {
	Box,
	Button,
	Divider,
	Tag,
	Text,
	useColorModeValue,
	Editable,
	EditableInput,
	EditablePreview,
} from '@chakra-ui/react';
import { format } from 'date-fns';

import { editTodo, deleteTodo } from '@/actions/todos';

const editedTodo = {
	task: 'Changed!',
	tags: ['Chores', 'Still Boring!'],
};

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

			<Editable
				defaultValue={task}
				fontSize='xl'
				color={color}
				fontWeight='bold'>
				<EditablePreview />
				<EditableInput />
			</Editable>

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
			<Divider my='3' />
			<Button
				bg='gray.200'
				color='black'
				boxShadow='md'
				onClick={() => editTodo(editedTodo, _id)}>
				Edit
			</Button>
			<Button
				ml='2'
				bg='red.400'
				color='white'
				boxShadow='md'
				onClick={() => deleteTodo(_id)}>
				Delete
			</Button>
		</Box>
	);
}

export default Todo;
