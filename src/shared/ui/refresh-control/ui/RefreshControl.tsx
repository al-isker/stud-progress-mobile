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
	refreshing,
	onRefresh,
	...props
}: RefreshControlProps) => {
	const { theme } = useUnistyles();

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
			colors={[theme.colors.primary]}
			tintColor={theme.colors.primary}
			refreshing={localRefreshing}
			onRefresh={handleRefresh}
			{...props}
		/>
	);
};
