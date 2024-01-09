import React, {useCallback, useMemo} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {BeerList} from '../Beers/BeersList';
import {storage} from '../utility/MMKV';
import {useTheme} from '../utility/useTheme';
import {getCurrentEnv} from './Home.utils';
import {ENV_NAME} from './Home.interace';

export const Home = () => {
  const feed = storage.getString('feeds');

  const theme = useTheme(state => state.theme);
  const env = getCurrentEnv();

  const styles = useMemo<ViewStyle>(() => {
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
    <View style={[styles, {flex: 1}]}>
      <Text
        style={{
          lineHeight: 20,
          fontSize: 16,
          color: 'white',

          alignSelf: 'center',
        }}>
        WELCOME TO HOME PAGE
      </Text>
      <BeerList />
    </View>
  );
};
