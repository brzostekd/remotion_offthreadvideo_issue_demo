import React from 'react';
import {AbsoluteFill, OffthreadVideo, Video} from 'remotion';
import {z} from 'zod';
import {VideoInfoProps} from '../basicTypes';

export const testProps = z.object({}).extend(VideoInfoProps.shape);

export const Test: React.FC<Pick<z.infer<typeof testProps>, 'videoSrc'>> = ({
	videoSrc,
}) => (
	<AbsoluteFill>
		<OffthreadVideo src={videoSrc}></OffthreadVideo>
	</AbsoluteFill>
);
