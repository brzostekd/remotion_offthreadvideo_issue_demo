// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import {Config} from '@remotion/cli/config';
Config.setConcurrency(2);
// Config.setBrowserExecutable(
// 	'C:\\Program Files (x86)\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
// );
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
