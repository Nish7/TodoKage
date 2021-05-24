import { Provider } from 'next-auth/client';
import { SWRConfig } from 'swr';
import { ChakraProvider } from '@chakra-ui/react';
import onError from '@/lib/globalError';
import fetcher from '@/utils/fetcher';
import theme from '@/theme/index';

const ContextProviders = ({ session, children }) => {
	return (
		<Provider session={session}>
			<SWRConfig value={{ fetcher, onError }}>
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</SWRConfig>
		</Provider>
	);
};

export default ContextProviders;
