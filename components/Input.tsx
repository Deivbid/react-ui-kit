import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import React from 'react';

const Input = ({ children, style, ...props }: TextInputProps) => {
  const inputStyle = StyleSheet.flatten([style]);

  return (
    <TextInput style={inputStyle} {...props}>
      {children}
    </TextInput>
  );
};

export default Input;
