import BackgroundFetch from 'react-native-background-fetch';
import {storage} from './MMKV';

export async function initBackgroundFetch() {
  // BackgroundFetch event handler.
  const onEvent = async taskId => {
    console.log('[BackgroundFetch] task: ', taskId);

    try {
      const response = await fetch(
        'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10',
        {
          headers: new Headers({
            'X-RapidAPI-Key':
              'e58faaab04mshef197ca7ff0f4b9p1c91cfjsn898a5a6c8f04',
            'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
          }),
        },
      );
      const text = await response.text();

      storage.setString('feeds', text);

      BackgroundFetch.finish(taskId);
    } catch (e) {
      console.error('Error in background task', e);
    }
  };

  const onTimeout = async taskId => {
    console.warn('[BackgroundFetch] TIMEOUT task: ', taskId);
    BackgroundFetch.finish(taskId);
  };

  // Initialize BackgroundFetch only once when component mounts.
  let status = await BackgroundFetch.configure(
    {minimumFetchInterval: 15},
    onEvent,
    onTimeout,
  );

  console.log('[BackgroundFetch] configure status: ', status);
}
