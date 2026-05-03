type AsyncEffectCallback = () => Promise<void>;

export const asyncEffect = (asyncEffectCallback: AsyncEffectCallback) => {
	return () => {
		void asyncEffectCallback();
	};
};
