import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {useBeerFetchingHook} from './hooks/useBeerFetchingHook';
import {useBeerStore} from './hooks/useBeerStore';
import {BeerItem} from './components/BeerItem';

export const BeerList = () => {
  const {fetchNextPage} = useBeerFetchingHook();
  const data = useBeerStore(store => store.beerData);

  useEffect(() => {
    fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data === null) {
    return <ActivityIndicator size={'large'} color={'yellow'} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={BeerItem}
      numColumns={2}
      onEndReached={fetchNextPage}
      contentContainerStyle={styles.content}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 32,
  },
});
