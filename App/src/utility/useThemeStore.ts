import {create} from 'zustand';
import {ENV_NAME} from '../Home/Home.interace';

export const useThemeStore = create(set => {
  return {
    theme: ENV_NAME.PROD,
    setTheme: () => set(theme => ({theme})),
  };
});
