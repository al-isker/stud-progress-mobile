import { DehydrateOptions } from '@tanstack/react-query';

type ShouldDehydrateQuery = DehydrateOptions['shouldDehydrateQuery'];

export const shouldDehydrateQuery: ShouldDehydrateQuery = query => {
	const isPersist = Boolean(query.meta?.persist);

	const isSuccess = query.state.status === 'success';

	return isPersist && isSuccess;
};
