import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { COLORS } from '@/shared/constants/theme';

export const Header = () => {
	return (
		<Fragment>
			<StatusBar backgroundColor={COLORS.primary} style='light' />
			<View className='elevation-lg z-10 bg-primary px-4 pb-4 pt-2'>
				<Text className='font-golos-bold text-3xl text-white'>
					Stud Progress
				</Text>
			</View>
		</Fragment>
	);
};
