export const multiple = (...functions: (Function | undefined)[]) => {
	return (...args: unknown[]) => {
		for (const fn of functions) {
			fn?.(...args);
		}
	};
};
