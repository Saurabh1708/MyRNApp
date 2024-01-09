import React from 'react';
import {Image, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {Beer} from '../Beers.interface';
import {COLORS} from '../../utility/Colors';

export const BeerItem: ListRenderItem<Beer> | null | undefined = ({
  item: {imgUrl, tagline, name, description},
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: imgUrl}}
        height={180}
        width={50}
        style={styles.image}
      />

      <Text style={styles.tagline}>{tagline}</Text>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.description}>{description.substring(0, 80)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: 164,
    borderRadius: 10,
    backgroundColor: COLORS.CREAM,
    marginRight: 16,
    marginBottom: 16,
    overflow: 'visible',
    paddingLeft: 10,
  },
  image: {
    position: 'absolute',
    right: 0,
  },
  tagline: {
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.DARK_GREY,
    marginVertical: 12,

    maxWidth: 100,
  },
  name: {
    color: COLORS.BLACK,
    lineHeight: 20,
    fontSize: 16,
    fontWeight: '700',
    maxWidth: 105,
  },
  description: {
    lineHeight: 16,
    fontSize: 12,
    color: COLORS.GREY,
    maxWidth: 105,
  },
});
