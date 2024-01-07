import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BeerList} from '../Beers/BeersList';
import {storage} from '../utility/MMKV';
import {useTheme} from '../utility/useTheme';

export const Home = () => {
  const feed = storage.getString('feeds');
  console.log('feed from storage', feed);
  const theme = useTheme(state => state.theme);

  return (
    <View style={{backgroundColor: 'red', height: 100, width: 100}}>
      <BeerList />
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    backgroundColor:
  }
})
