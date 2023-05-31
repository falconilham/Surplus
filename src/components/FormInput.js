import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';
import {useController} from 'react-hook-form';

const FormInput = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  errors,
}) => {
  const {
    field: {onChange, onBlur, value},
  } = useController({
    control,
    defaultValue: '',
    name,
    rules,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
      {errors && errors[name] && (
        <Text style={styles.error}>{errors[name].message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default FormInput;
