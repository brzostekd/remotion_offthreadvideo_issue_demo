import {CalculateMetadataFunction, Composition, staticFile} from 'remotion';
import {Test, testProps} from './test';
import {z} from 'zod';

// Each <Composition> is an entry in the sidebar!
const calculateMetadata: CalculateMetadataFunction<
	z.infer<typeof testProps>
> = async ({defaultProps, props}) => {
	const newProps = {...defaultProps, ...props};
	newProps.videoSrc = staticFile(newProps.videoSrc);
	return {
		durationInFrames: newProps.durationInFrames,
		fps: newProps.fps,
		width: newProps.width,
		height: newProps.height,
		props: newProps,
	};
};

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="test"
				schema={testProps}
				component={Test}
				defaultProps={{
					videoSrc: 'vid.mp4',
					durationInFrames: 4252,
					fps: 30,
					width: 854,
					height: 480,
				}}
				durationInFrames={30 * 60}
				fps={30}
				width={854}
				height={480}
				calculateMetadata={calculateMetadata}
			/>
		</>
	);
};
