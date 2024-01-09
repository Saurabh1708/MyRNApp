import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useBeerFetchingHook} from './useBeerFetchingHook';

export const BeerList = () => {
  const beers = useBeerFetchingHook();
  const renderItem = useCallback(item => {
    console.log('item--', item);
    return (
      <View
        style={{
          height: 190,
          width: 164,
          borderRadius: 10,
          backgroundColor: '#C6FFE1',
        }}>
        <Text
          style={{
            color: '#333',
            lineHeight: 14,
            fontSize: 9,
            fontWeight: '500',
          }}>
          {item.name}
        </Text>

        <Text
          style={{
            lineHeight: 20,
            fontSize: 14,
            fontWeight: '700',
            color: '#000',
          }}>
          {item.tagline}
        </Text>

        <Text
          style={{
            lineHeight: 16,
            fontSize: 8,
            color: '#bdbdbd',
          }}>
          {item.description}
        </Text>
      </View>
    );
  }, []);

  if (beers === null) {
    return <ActivityIndicator size={'large'} color={'yellow'} />;
  }

  return <FlatList data={beers} renderItem={renderItem} numColumns={2} onEndReached={()} />;
};
