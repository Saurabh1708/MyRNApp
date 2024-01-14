import React, {useCallback, useMemo} from 'react';
import {LANGUAGES} from '../Constants';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import {useTranslation} from '../utility/useTranslationHook';
import {useNavigation} from '@react-navigation/native';

const LanguageList = () => {
  const {changeLanguage} = useTranslation();
  const {navigate} = useNavigation();
  const setLanguage = useCallback<
    (lang: string) => (event: GestureResponderEvent) => void
  >(
    (lang: string) => () => {
      changeLanguage(lang);
      navigate('Home');
    },
    [changeLanguage, navigate],
  );

  const ItemSeparatorComponent = useCallback(() => {
    return <View style={styles.itemSeparator} />;
  }, []);

  return (
    <FlatList
      data={LANGUAGES}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={({item: {label, name}}) => {
        return (
          <Pressable onPress={setLanguage(name)}>
            <Text style={styles.langLabel}>{label}</Text>
          </Pressable>
        );
      }}
    />
  );
};

export const LanguageSelection = () => {
  return (
    <View style={styles.langContainer}>
      <View>
        <Text style={styles.headerText}>Select your language</Text>
      </View>
      <LanguageList />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    marginVertical: 12,
    textAlign: 'center',
    color: '#000',
  },
  langLabel: {
    fontSize: 20,
    lineHeight: 30,
    color: '#adadad',
  },
  langContainer: {
    marginLeft: 16,
  },
  itemSeparator: {
    height: 20,
  },
});
