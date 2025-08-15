import { useEffect, useRef, useState } from 'react';
import { openSettings } from 'expo-linking';
import {
	NotificationPermissionsStatus,
	PermissionStatus,
	getPermissionsAsync,
	requestPermissionsAsync
} from 'expo-notifications';
import { AppState } from 'react-native';
import { useAsyncEffect } from '@/shared/lib/react-sugar';

export const useNotificationPermissions = () => {
	const [status, setStatus] = useState<PermissionStatus>();

	const permissionsRef = useRef<NotificationPermissionsStatus>();

	const updatePermissions = (newPermissions: NotificationPermissionsStatus) => {
		permissionsRef.current = newPermissions;

		if (status !== newPermissions.status) {
			setStatus(newPermissions.status);
		}
	};

	const enable = async () => {
		if (
			permissionsRef.current?.status === PermissionStatus.DENIED &&
			!permissionsRef.current.canAskAgain
		) {
			openSettings();
		} else {
			const requestedPermissions = await requestPermissionsAsync();

			updatePermissions(requestedPermissions);
		}
	};

	const disable = () => {
		openSettings();
	};

	const toggle = () => {
		if (status === PermissionStatus.GRANTED) {
			disable();
		} else {
			enable();
		}
	};

	useAsyncEffect(async () => {
		const currentPermissions = await getPermissionsAsync();

		updatePermissions(currentPermissions);
	}, []);

	useEffect(() => {
		const subscription = AppState.addEventListener('focus', async () => {
			const currentPermissions = await getPermissionsAsync();

			updatePermissions(currentPermissions);
		});

		return subscription.remove;
	}, []);

	return { status, enable, disable, toggle };
};
