export const multiple = (...functions: (Function | null | undefined)[]) => {
	return (...args: unknown[]) => {
		for (const fn of functions) {
			fn?.(...args);
		}
	};
};
