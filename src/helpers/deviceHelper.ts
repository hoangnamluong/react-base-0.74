import {Platform} from 'react-native';
import {getDeviceNameSync, getDeviceId} from 'react-native-device-info';

const isIos = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const isWindow = Platform.OS === 'windows';
const isWeb = Platform.OS === 'web';
const deviceId = getDeviceId();
const deviceName = getDeviceNameSync();

export {isIos, isAndroid, isWindow, isWeb, deviceId, deviceName};
