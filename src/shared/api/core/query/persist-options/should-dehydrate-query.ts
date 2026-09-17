import { DehydrateOptions } from '@tanstack/react-query';

type ShouldDehydrateQueryCallback = DehydrateOptions['shouldDehydrateQuery'];

export const shouldDehydrateQuery: ShouldDehydrateQueryCallback = query => {
	const isPersist = Boolean(query.meta?.persist);

	const isSuccess = query.state.status === 'success';

	return isPersist && isSuccess;
};
