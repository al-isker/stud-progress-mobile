type AsyncEffectCallback = () => Promise<void>;

/**
 * Адаптирует async callback для эффекта. Ошибки обрабатываются внутри callback;
 * cleanup и отмена асинхронной работы не поддерживаются.
 */
export const asyncEffect = (asyncEffectCallback: AsyncEffectCallback) => {
	return () => {
		void asyncEffectCallback();
	};
};
