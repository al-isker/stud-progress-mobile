import { nativeApplicationVersion } from 'expo-application';
import { compareVersions } from 'compare-versions';
import { appVersionType } from './app-version-type';

export const checkIsSupportedAppVersion = (
	minSupportedAppVersion: appVersionType
) => {
	const resultCompareVersions = compareVersions(
		nativeApplicationVersion!,
		minSupportedAppVersion
	);

	const isSupportedVersion = resultCompareVersions === -1;

	return isSupportedVersion;
};
