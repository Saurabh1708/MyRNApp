import React, {useCallback} from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {useTranslation} from '../../utility/useTranslationHook';
import {useNavigation} from '@react-navigation/native';

export const Header = () => {
  const {t} = useTranslation();
  const {goBack, canGoBack} = useNavigation();

  const onBackPress = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  return (
    <Pressable onPress={onBackPress} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icons/back.png')}
      />

      <Text style={styles.header}>{t('home.welcome')}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  header: {
    lineHeight: 22,
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    height: 28,
    width: 28,
    marginRight: 16,
    marginLeft: 8,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
});
