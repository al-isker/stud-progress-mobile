type Callback<Args extends unknown[]> = (...args: Args) => void;
type OptionalCallback<Args extends unknown[]> =
	| Callback<Args>
	| (() => void)
	| null
	| undefined;

export const callAll = <Args extends unknown[]>(
	...functions: OptionalCallback<Args>[]
) => {
	return (...args: Args) => {
		for (const fn of functions) {
			if (fn) {
				(fn as Callback<Args>)(...args);
			}
		}
	};
};
