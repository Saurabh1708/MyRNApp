import {ENV_NAME} from '../Home/Home.interace';
import {getCurrentEnv} from '../Home/Home.utils';
import {storage} from './MMKV';

export const setTheme = () => {
  const env = getCurrentEnv();
};
