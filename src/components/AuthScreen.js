import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import FormInput from './FormInput';
import {login} from '../services/authService';
import {SurplusLogo} from '../components/';
import {useNavigation} from '@react-navigation/native';
import {setError} from '../redux/errorSlice';
import {setAuth} from '../redux/authSlice';
const initialState = {
  username: 'kminchelle',
  password: '0lelplR',
};
const validation = {
  username: {
    required: 'Username is required',
    pattern: {
      value: /\S+/,
      message: 'Username is required',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters',
    },
  },
};

const AuthScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const navigation = useNavigation();
  const handleLogin = async value => {
    try {
      const response = await login(value);
      const data = response.data;
      console.log(data);
      dispatch(setAuth(data));
      navigation.navigate('Home');
    } catch (error) {
      console.log({error});
      dispatch(setError(error.response.data.message));
    }
  };
  console.log({state});
  return (
    <View style={styles.container}>
      <SurplusLogo />
      <View style={styles.form}>
        <FormInput
          control={control}
          initialValue={initialState.username}
          name="username"
          placeholder="Username"
          errors={errors}
          rules={validation.username}
        />
        <FormInput
          control={control}
          name="password"
          placeholder="Password"
          initialValue={initialState.password}
          secureTextEntry
          errors={errors}
          rules={validation.password}
        />
        <Button
          mode="contained"
          onPress={handleSubmit(handleLogin)}
          style={styles.loginButton}>
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  form: {
    flex: 1,
    alignSelf: 'stretch',
  },
  loginButton: {
    marginTop: 16,
    width: '100%',
  },
});

export default AuthScreen;
