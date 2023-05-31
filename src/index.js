import React from 'react';
import {Provider} from 'react-redux';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  Portal,
} from 'react-native-paper';
import store from './redux';
import AppNavigator from './navigation';
import {ErrorModal} from './components';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFB100',
    secondary: '#FBC252',
    third: '#F0ECCF',
    forth: '#A3BB98',
  },
  // fonts: configureFonts({config: fontConfig, isV3: false}),
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Portal>
          <AppNavigator />
          <ErrorModal />
        </Portal>
      </PaperProvider>
    </Provider>
  );
};

export default App;
