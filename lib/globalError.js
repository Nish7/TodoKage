// Global Error handling for SWR
import toast from '@/components/ui/Toast';

export default function globalErr(err, key) {
	console.log(err);

	// todo: refactor
	const description = err?.response?.data?.error;
	const { message: title } = err;

	if (err) {
		toast({
			title,
			description,
			status: 'error',
			duration: 2000,
			isClosable: true,
		});
	}
}
