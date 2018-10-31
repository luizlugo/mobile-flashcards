import { Platform } from 'react-native';
import uuidv1 from 'uuid/v1';

export const isIOS = (Platform.OS === 'ios') ? true : false;
export function generateUUID() {
    return uuidv1();
}