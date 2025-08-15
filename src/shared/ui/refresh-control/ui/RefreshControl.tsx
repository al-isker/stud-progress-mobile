import { forwardRef, useEffect, useState } from 'react';
import {
	RefreshControl as NativeRefreshControl,
	RefreshControlProps as NativeRefreshControlProps
} from 'react-native';
import { useStyles } from 'react-native-unistyles';

export type RefreshControlProps = NativeRefreshControlProps;

export const RefreshControl = forwardRef<
	NativeRefreshControl,
	RefreshControlProps
>(function RefreshControl({ refreshing, onRefresh, ...props }, forwardedRef) {
	const { theme } = useStyles();

	const [localRefreshing, setLocalRefreshing] = useState(refreshing);

	const handleRefresh = () => {
		if (onRefresh) {
			setLocalRefreshing(true);
			onRefresh();
		}
	};

	useEffect(() => {
		setLocalRefreshing(refreshing);
	}, [refreshing]);

	return (
		<NativeRefreshControl
			ref={forwardedRef}
			colors={[theme.colors.primary]}
			tintColor={theme.colors.primary}
			refreshing={localRefreshing}
			onRefresh={handleRefresh}
			{...props}
		/>
	);
});
