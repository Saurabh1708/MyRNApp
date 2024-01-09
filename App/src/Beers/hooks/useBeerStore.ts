import {create} from 'zustand';
import {Beer} from '../Beers.interface';

export const useBeerStore = create(set => {
  return {
    beerData: null,
    setBeerData: (newData: Array<Beer>) =>
      set(previousState => {
        if (previousState.beerData) {
          return {
            beerData: [...previousState.beerData, ...newData],
          };
        } else {
          return {
            beerData: newData,
          };
        }
      }),
  };
});
