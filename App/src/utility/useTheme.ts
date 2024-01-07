import {create} from 'zustand';

export const useTheme = create(set => {
  return {
    theme: 0,
    setTheme: () => set(theme => ({theme})),
  };
});
