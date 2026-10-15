import { ConfigContext, ExpoConfig } from 'expo/config';
import packageJSON from './package.json';

const APP_NAME = 'Stud Progress';
const APP_VERSION = packageJSON.version.split('-')[0];

const APP_OWNER = 'alisker';
const APP_SLUG = 'stud-progress-mobile';
const EAS_PROJECT_ID = '7c0396fc-ebd2-4d27-aa61-243879832b4a';

type AppVariantType = 'development' | 'preview' | 'production';

const APP_SCHEMES: Record<AppVariantType, string> = {
	development: 'stud-progress.development',
	preview: 'stud-progress.preview',
	production: 'stud-progress'
};
const APP_APPLICATION_IDS: Record<AppVariantType, string> = {
	development: 'com.alisker.studprogress.development',
	preview: 'com.alisker.studprogress.preview',
	production: 'com.alisker.studprogress'
};
const APP_ANDROID_GOOGLE_SERVICES_FILE = './google-services.json';
const APP_IOS_GOOGLE_SERVICES_FILES: Record<AppVariantType, string> = {
	development: './GoogleService-Info.development.plist',
	preview: './GoogleService-Info.preview.plist',
	production: './GoogleService-Info.plist'
};

const APP_VARIANT =
	(process.env.APP_VARIANT as AppVariantType | undefined) ?? 'development';

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: APP_NAME,
	version: APP_VERSION,
	owner: APP_OWNER,
	slug: APP_SLUG,
	scheme: APP_SCHEMES[APP_VARIANT],
	orientation: 'portrait',
	icon: './assets/app-icon.png',
	userInterfaceStyle: 'light',
	newArchEnabled: true,
	android: {
		package: APP_APPLICATION_IDS[APP_VARIANT],
		adaptiveIcon: {
			foregroundImage: './assets/app-adaptive-icon.png',
			backgroundColor: '#4b0aff'
		},
		googleServicesFile: APP_ANDROID_GOOGLE_SERVICES_FILE
	},
	ios: {
		bundleIdentifier: APP_APPLICATION_IDS[APP_VARIANT],
		supportsTablet: true,
		googleServicesFile: APP_IOS_GOOGLE_SERVICES_FILES[APP_VARIANT],
		infoPlist: {
			ITSAppUsesNonExemptEncryption: false
		}
	},
	plugins: [
		[
			'expo-router',
			{
				root: './app'
			}
		],
		[
			'expo-splash-screen',
			{
				image: './assets/app-splash-icon.png',
				imageWidth: 250,
				resizeMode: 'contain',
				backgroundColor: '#4b0aff'
			}
		],
		'react-native-edge-to-edge',
		'@react-native-firebase/app',
		[
			'expo-font',
			{
				android: {
					fonts: [
						{
							fontFamily: 'Golos Text',
							fontDefinitions: [
								{
									path: 'node_modules/@expo-google-fonts/golos-text/400Regular/GolosText_400Regular.ttf',
									weight: 400
								},
								{
									path: 'node_modules/@expo-google-fonts/golos-text/500Medium/GolosText_500Medium.ttf',
									weight: 500
								},
								{
									path: 'node_modules/@expo-google-fonts/golos-text/600SemiBold/GolosText_600SemiBold.ttf',
									weight: 600
								},
								{
									path: 'node_modules/@expo-google-fonts/golos-text/700Bold/GolosText_700Bold.ttf',
									weight: 700
								}
							]
						}
					]
				},
				ios: {
					fonts: [
						'node_modules/@expo-google-fonts/golos-text/400Regular/GolosText_400Regular.ttf',
						'node_modules/@expo-google-fonts/golos-text/500Medium/GolosText_500Medium.ttf',
						'node_modules/@expo-google-fonts/golos-text/600SemiBold/GolosText_600SemiBold.ttf',
						'node_modules/@expo-google-fonts/golos-text/700Bold/GolosText_700Bold.ttf'
					]
				}
			}
		],
		[
			'expo-build-properties',
			{
				android: {
					minSdkVersion: 28
				},
				ios: {
					deploymentTarget: undefined,
					useFrameworks: 'static',
					buildReactNativeFromSource: true
				}
			}
		],
		[
			'app-icon-badge',
			{
				enabled: APP_VARIANT !== 'production',
				badges: [
					{
						text: APP_VARIANT,
						type: 'banner'
					},
					{
						text: APP_VERSION,
						type: 'ribbon'
					}
				]
			}
		]
	],
	extra: {
		router: {
			origin: false,
			root: './app'
		},
		eas: {
			projectId: EAS_PROJECT_ID
		}
	}
});
