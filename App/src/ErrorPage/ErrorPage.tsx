import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ErrorImage} from './components/ErrorImage';

export const ErrorPage = () => {
  return (
    <View style={styles.container}>
      <ErrorImage />
      <Text style={styles.header}>Ooops!</Text>
      <Text style={styles.description}>Something went wrong!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    lineHeight: 30,
    marginVertical: 30,
  },
});
