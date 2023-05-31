import React from 'react';
import {useSelector} from 'react-redux';
import {View, Button, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import FormInput from './FormInput';
import {login} from '../services/authService';
import {SurplusLogo} from '../components/'; // Import the SurplusLogo component

const AuthScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const state = useSelector(state => state);
  console.log({state: state.error});
  return (
    <View style={styles.container}>
      <SurplusLogo />
      <View style={styles.form}>
        <FormInput
          control={control}
          name="username"
          placeholder="Username"
          errors={errors}
        />
        <FormInput
          control={control}
          name="password"
          placeholder="Password"
          secureTextEntry
          errors={errors}
        />
        <Button title="Login" onPress={handleSubmit(login)} />
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
});

export default AuthScreen;
