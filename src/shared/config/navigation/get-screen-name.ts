export const getScreenName = (route: string) => {
	if (route === '/') {
		return 'index';
	}

	return `${route.slice(1)}/index`;
};
