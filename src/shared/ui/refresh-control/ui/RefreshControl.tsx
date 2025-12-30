import { Ref, useEffect, useState } from 'react';
import {
	RefreshControl as NativeRefreshControl,
	RefreshControlProps as NativeRefreshControlProps
} from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

export type RefreshControlProps = NativeRefreshControlProps & {
	ref?: Ref<NativeRefreshControl>;
};

export const RefreshControl = ({
	refreshing: refreshingProp,
	onRefresh,
	...props
}: RefreshControlProps) => {
	const { theme } = useUnistyles();

	const [refreshing, setRefreshing] = useState(refreshingProp);

	const handleRefresh = () => {
		if (onRefresh) {
			setRefreshing(true);
			onRefresh();
		}
	};

	useEffect(() => {
		setRefreshing(refreshingProp);
	}, [refreshingProp]);

	return (
		<NativeRefreshControl
			colors={[theme.colors.primary]}
			tintColor={theme.colors.primary}
			refreshing={refreshing}
			onRefresh={handleRefresh}
			{...props}
		/>
	);
};
