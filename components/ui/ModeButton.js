import { useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { mode } from '@chakra-ui/theme-tools';

const iconStyles = {
	boxSize: 5,
};

function ModeButton() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			bg='transparent'
			_hover={{ background: 'transparent' }}
			onClick={toggleColorMode}
			mx={1}>
			{mode(
				<SunIcon {...iconStyles} />,
				<MoonIcon {...iconStyles} />,
			)({ colorMode })}
		</Button>
	);
}

export default ModeButton;
