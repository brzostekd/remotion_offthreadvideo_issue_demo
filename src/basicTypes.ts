import {z} from 'zod';
export const VideoInfoProps = z.object({
	videoSrc: z.string(),
	durationInFrames: z.number(),
	fps: z.number(),
	width: z.number(),
	height: z.number(),
});

export type VideoInfoProps = z.infer<typeof VideoInfoProps>;
