import { nativeApplicationVersion } from 'expo-application';
import { compareVersions } from 'compare-versions';
import { AppVersionType } from './app-version-type';

export const checkIsSupportedAppVersion = (
	minSupportedAppVersion: AppVersionType
) => {
	const resultCompareVersions = compareVersions(
		nativeApplicationVersion!,
		minSupportedAppVersion
	);

	const isSupportedVersion = resultCompareVersions === -1;

	return isSupportedVersion;
};
