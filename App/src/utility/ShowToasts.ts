import {ToastAndroid} from 'react-native';

export const showError = (message: string, length: number) => {
  ToastAndroid.show(message, length);
};
