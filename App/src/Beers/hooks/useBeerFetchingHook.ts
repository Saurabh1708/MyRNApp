import {useCallback, useRef} from 'react';
import {Beer, BeerFetchingHookResponse} from '../Beers.interface';
import {useBeerStore} from './useBeerStore';
import {getBeersFromNativeModule} from '../Beers.utils';

export const useBeerFetchingHook = (): BeerFetchingHookResponse => {
  const nextPage = useRef<number>(1);
  const setBeerData = useBeerStore(store => store.setBeerData);
  const beerData = useBeerStore(store => store.beerData);

  const fetchNextPage = useCallback(() => {
    getBeersFromNativeModule(nextPage.current).then((response: Array<Beer>) => {
      if (beerData === null) {
        setBeerData(response);
      } else {
        setBeerData(response);
      }

      nextPage.current = nextPage.current + 1;
    });
  }, [beerData, setBeerData]);

  return {fetchNextPage};
};
