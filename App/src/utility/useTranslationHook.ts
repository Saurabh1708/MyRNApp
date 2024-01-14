import {useTranslation as useT} from 'react-i18next';

export const useTranslation = () => {
  const {t, i18n} = useT();
  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  return {
    t,
    changeLanguage,
  };
};
