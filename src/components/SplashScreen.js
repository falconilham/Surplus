import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import SurplusLogo from './Logo';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {auth} = useSelector(state => state);
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the home if there a token or else to login screen after 3 seconds
      if (auth.token) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Auth');
      }
    }, 3000);

    return () => {
      // Clear the timeout if the component is unmounted before the timer expires
      clearTimeout(timer);
    };
  }, [navigation, auth]);

  return (
    <View style={styles.container}>
      <SurplusLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SplashScreen;
