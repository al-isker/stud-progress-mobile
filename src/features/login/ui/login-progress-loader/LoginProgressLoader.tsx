import {
	ProgressLoader,
	ProgressLoaderProps
} from '@/shared/ui/progress-loader';
import { useLogin } from '../../model/hooks/use-login';

type LoginProgressLoaderProps = Pick<
	ProgressLoaderProps,
	'colorOnPrimary' | 'style'
>;

export const LoginProgressLoader = ({
	style,
	colorOnPrimary
}: LoginProgressLoaderProps) => {
	const { progress } = useLogin();

	return (
		<ProgressLoader
			style={style}
			colorOnPrimary={colorOnPrimary}
			sharedValue={progress}
		/>
	);
};
