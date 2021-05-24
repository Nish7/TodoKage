// Theme Entrypoint
import { extendTheme } from '@chakra-ui/react';
import { colors, layerStyles, textStyles } from './foundational';
import styles from './global';

export const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const overrides = {
	// Config
	config,

	// Global Styles
	styles,

	// Foundational Styles
	colors,
	layerStyles,
	textStyles,

	// Component Styles
	components: {
		// Component Styles
	},
};

export default extendTheme(overrides);
