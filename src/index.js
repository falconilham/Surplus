import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  Portal,
} from 'react-native-paper';
import store, {persistor} from './redux';
import AppNavigator from './navigation';
import {ErrorModal} from './components';

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
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Portal>
            <AppNavigator />
            <ErrorModal />
          </Portal>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
