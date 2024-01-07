import {NativeModules} from 'react-native';

export function getCurrentEnv() {
  return NativeModules.RNConfig.env;
}
