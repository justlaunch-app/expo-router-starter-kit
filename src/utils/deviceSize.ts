import { Dimensions } from 'react-native';

export const WINDOW = Dimensions.get('window');
export const SCREEN_WIDTH = WINDOW.width;
export const SCREEN_HEIGHT = WINDOW.height;
export const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;

export const isSmallDevice = SCREEN_WIDTH < 375;
export const isMediumDevice = SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 414;
export const isLargeDevice = SCREEN_WIDTH >= 414;
