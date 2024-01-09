import React, {useMemo} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {BeerList} from '../Beers/BeersList';
import {storage} from '../utility/MMKV';
import {getCurrentEnv} from './Home.utils';
import {ENV_NAME} from './Home.interace';

export const Home = () => {
  const feed = storage.getString('feeds');
  // TO DO: feed syncing with POST api endpoint
  const env = getCurrentEnv();

  const bgStyle = useMemo<ViewStyle>(() => {
    switch (env) {
      case ENV_NAME.DEV:
        return {
          backgroundColor: 'black',
        };
      case ENV_NAME.STAG:
        return {
          backgroundColor: 'red',
        };
      default:
        return {
          backgroundColor: 'blue',
        };
    }
  }, [env]);

  return (
    <View style={[bgStyle, styles.flex]}>
      <Text style={styles.header}>WELCOME TO HOME PAGE</Text>
      <BeerList />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  header: {
    lineHeight: 20,
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
});
