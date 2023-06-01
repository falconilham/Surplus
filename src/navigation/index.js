import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  SplashScreen,
  AuthScreen,
  Home,
  ProductDetail,
  TopNavigation,
  SearchProduct,
} from '../components';

const Stack = createStackNavigator();

const listScreens = [
  {
    name: 'Splash',
    component: SplashScreen,
    options: {
      header: null,
      headerShown: false,
    },
  },
  {
    name: 'Auth',
    component: AuthScreen,
    options: {
      header: null,
      headerShown: false,
    },
  },
  {
    name: 'Home',
    component: Home,
    // options: {
    //   header: null,
    //   headerShown: false,
    // },
  },
  {
    name: 'ProductDetail',
    component: ProductDetail,
    // options: {
    //   header: null,
    //   headerShown: false,
    // },
  },
  {
    name: 'SearchProduct',
    component: SearchProduct,
    // options: {
    //   header: null,
    //   headerShown: false,
    // },
  },
  // Add more screens as needed
];

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <TopNavigation />,
        }}>
        {listScreens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
