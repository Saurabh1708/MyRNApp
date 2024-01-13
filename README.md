This is a [**React Native**](https://reactnative.dev) project bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli) currently configured to run on Android only. I have attemptd to implement the following concepts through example in this app.

# What's in it? 💭🤔🗯️
- Since, devs don't normally ship to production without testing on other environments (envs), the app runs on the following envs:
    - **Development** 💻 
    - **Staging** 💡
    - **Production** 🚀
- Each env has a different theme. 🎨
- The home screen has a listing UI of the most famous beers in the world, which are fetched through a custom **Native Module** that fetches the responses in a paginated manner.
- React native navigation is used to navigate through the app.
- [**Zustand**](https://zustand-demo.pmnd.rs/), is used for global state management.
- To ensure prompt error and crash reporting, [**Crashlytics**](https://firebase.google.com/products/crashlytics) is used. We can visualize the stack traces to efficiently figure out crashes and bottlenecks in the project.
- [**react-native-background-fetch**](https://www.npmjs.com/package/react-native-background-fetch) package is used to perform tasks (API calls) in the background after every 15mins
- [**react-native-mmkv-storage**](https://www.npmjs.com/package/react-native-mmkv-storage) package is used to synchronously fetch and store the responses from the background API calls.
- For comparison between various storage libraries, I referred to this [Doc](https://arunkumarvallal.medium.com/overview-of-react-native-mmkv-efficient-key-value-storage-42a19baa01f9).


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 0: Checkout to the App directory

```
cd App
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ app:

### For Android builds

```bash
# using npm
npm android:[flavor]:[buildType] 
```

### Example, for staging debug build

```bash
# using npm
npm run android:staging:debug 
```

### This will build and install the app on your connected emulator or device. The metro bundler will automatically connect to the app. In case it fails to connect, use this command:

```
adb reverse tcp:8081 tcp:8081
```

## Yayyy! :tada:

We've successfully run and modified our React Native App. :partying_face:

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
