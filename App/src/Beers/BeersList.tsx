import React from 'react';
import {NativeModules, View} from 'react-native';

const fetchBeers = async () => {
  try {
    const page = 1;
    const perPage = 10;
    console.log('beer module', NativeModules.BeerApiModule);
    const beers = await NativeModules.BeerApiModule.getBeerListOfBeers(
      page,
      perPage,
    );
    console.log('Fetched beers:', beers[0]);
  } catch (error) {
    console.error('Error fetching beers:', error);
  }
};

export const BeerList = () => {
  console.log('list of beers', fetchBeers());
  return <View />;
};
