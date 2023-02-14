import {Dimensions, Platform} from 'react-native';

const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;

const screenDimensions = Dimensions.get('screen');
export const SCREEN_HEIGHT = screenDimensions.height;
export const SCREEN_WIDTH = screenDimensions.width;

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const IS_X = isIos && (SCREEN_HEIGHT > 800 || WINDOW_WIDTH > 800);
