import React from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const FormInput = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  initialValue,
  errors,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={initialValue}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors[name] && (
        <Text style={styles.errorText}>{errors[name].message}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default FormInput;
