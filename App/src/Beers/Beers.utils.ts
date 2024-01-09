import {NativeModules, ToastAndroid} from 'react-native';
import {showError} from '../utility/ShowToasts';

export const getBeersFromNativeModule = async (page: number) => {
  try {
    const response = await NativeModules.BeerApiModule.getBeerListOfBeers(
      page,
      10,
    );

    return response;
  } catch (error) {
    showError('Oops! Fetching from native failed!', ToastAndroid.LONG);
    return null;
  }
};
