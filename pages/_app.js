import ContextProviders from '@/components/ContextProviders';
import Navbar from '@/components/layout/Navbar';

function MyApp({ Component, pageProps }) {
	return (
		<ContextProviders session={pageProps.session}>
			<Navbar />
			<Component {...pageProps} />
		</ContextProviders>
	);
}

export default MyApp;
