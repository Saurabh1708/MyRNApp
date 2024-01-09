import {useCallback, useEffect, useState} from 'react';
import {getBeerData} from './Beers.utils';
import {NativeModules, ToastAndroid} from 'react-native';

export const useBeerFetchingHook = () => {
  const [beers, setBeers] = useState<any>(null);
  const page = 1;
  const perPage = 10;

  //implement fetch Next PAge
  // inmplement next page params
  // do some ui

  const fetchNextPage= useCallback(() =>{
    const nextPageParams=beers.slice(-1)
  },[])

  NativeModules.BeerApiModule.getBeerListOfBeers(page, perPage)
    .then(response => {
      setBeers(response);
    })
    .catch(error => {
      const showErrorToast = () => {
        ToastAndroid.show(
          'Oops! Background tasks not completed!',
          ToastAndroid.LONG,
        );
      };
      console.error('Error fetching beers:', error);
      showErrorToast();
    });

  return {data: beers, fetchNextPage:};
};
