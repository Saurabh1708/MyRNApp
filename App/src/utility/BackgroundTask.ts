import BackgroundFetch from 'react-native-background-fetch';
import {storage} from './MMKV';
import {
  BACKGROUND_API_HEADERS,
  BACKGROUND_API_URL,
  STORAGE_KEYS,
} from '../Constants';
import {ToastAndroid} from 'react-native';

const onEvent = async taskId => {
  console.log('[BackgroundFetch] task: ', taskId);
  const showErrorToast = () => {
    ToastAndroid.show(
      'Oops! Background tasks not completed!',
      ToastAndroid.LONG,
    );
  };
  const showSuccessToast = () => {
    ToastAndroid.show(
      'Oops! Background tasks not completed!',
      ToastAndroid.LONG,
    );
  };

  try {
    const response = await fetch(BACKGROUND_API_URL, {
      headers: new Headers(BACKGROUND_API_HEADERS),
    });

    const text = await response.text();
    console.log('text--', text);

    storage.setString(STORAGE_KEYS.FEED, text);

    BackgroundFetch.finish(taskId);
    showSuccessToast();
  } catch (e) {
    showErrorToast();
    console.error('Error in background task', e);
  }
};

export async function initBackgroundFetch() {
  // BackgroundFetch event handler.

  const onTimeout = async taskId => {
    console.warn('[BackgroundFetch] TIMEOUT task: ', taskId);
    BackgroundFetch.finish(taskId);
  };

  // Initialize BackgroundFetch only once when component mounts.
  const status = await BackgroundFetch.configure(
    {minimumFetchInterval: 15},
    onEvent,
    onTimeout,
  );

  console.log('[BackgroundFetch] configure status: ', status);
}
