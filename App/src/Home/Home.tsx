import React, {useMemo} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {BeerList} from '../Beers/BeersList';
import {storage} from '../utility/MMKV';
import {getCurrentEnv} from './Home.utils';
import {ENV_NAME} from './Home.interace';
import {Header} from './components/Header';

export const Home = () => {
  const feed = storage.getString('feeds');
  // TO DO: feed syncing with POST api endpoint
  const env = getCurrentEnv();

  const bgStyle = useMemo<ViewStyle>(() => {
    switch (env) {
      case ENV_NAME.DEV:
        return {
          backgroundColor: '#52504e',
        };
      case ENV_NAME.STAG:
        return {
          backgroundColor: '#a1425b',
        };
      default:
        return {
          backgroundColor: '#bfd5db',
        };
    }
  }, [env]);

  return (
    <View style={[bgStyle, styles.flex]}>
      <Header />
      <BeerList />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
