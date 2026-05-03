import { AppVersionType } from '@/shared/lib/mobile-app-info';

export type MobileAppInfoType = {
	minSupportedVersion: AppVersionType;
	linkToGooglePlay: string;
	linkToAppStore: string;
};
