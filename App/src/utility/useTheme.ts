import {useEffect} from 'react';
import {getCurrentEnv} from '../Home/Home.utils';
import {useThemeStore} from './useThemeStore';

export const useTheme = () => {
  const env = getCurrentEnv();
  const setTheme = useThemeStore(state => state.setTheme);

  useEffect(() => {
    setTheme(env);
  }, [env, setTheme]);
};
