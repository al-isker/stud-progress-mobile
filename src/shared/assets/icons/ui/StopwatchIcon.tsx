import Svg, { G, Path, SvgProps } from 'react-native-svg';

export const StopwatchIcon = (props: SvgProps) => (
	<Svg viewBox='0 0 24 24' fill='currentColor' {...props}>
		<G fillRule='evenodd' clipRule='evenodd'>
			<Path d='M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z' />
		</G>
	</Svg>
);
