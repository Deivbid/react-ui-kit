import {
  TextInput,
  TextInputProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ColorValue,
} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';

interface IInput extends TextInputProps {
  margin?: ViewStyle['margin'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  marginVertical?: ViewStyle['marginVertical'];
  padding?: ViewStyle['padding'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  paddingVertical?: ViewStyle['paddingVertical'];
  style?: StyleProp<ViewStyle>;
  color?: ColorValue;
  backgroundColor?: ViewStyle['backgroundColor'];
}

const Input = ({
  children,
  margin,
  marginTop,
  marginBottom,
  marginHorizontal,
  marginVertical,
  padding,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  paddingVertical,
  placeholderTextColor,
  color,
  backgroundColor,
  style,
  ...props
}: IInput) => {
  const { sizes, colors } = useTheme();

  const inputStyle = StyleSheet.flatten([
    {
      height: sizes.inputHeight,
      borderRadius: sizes.inputRadius,
      borderWidth: sizes.inputBorder,
      paddingHorizontal: sizes.base,
      borderColor: colors.inputBorder,
    },
    color !== undefined && { color },
    backgroundColor !== undefined && { backgroundColor },
    margin !== undefined && { margin },
    marginTop !== undefined && { marginTop },
    marginBottom !== undefined && { marginBottom },
    marginHorizontal !== undefined && { marginHorizontal },
    marginVertical !== undefined && { marginVertical },
    padding !== undefined && { padding },
    paddingTop !== undefined && { paddingTop },
    paddingBottom !== undefined && { paddingBottom },
    paddingHorizontal !== undefined && { paddingHorizontal },
    paddingVertical !== undefined && { paddingVertical },
    style,
  ] as ViewStyle);

  return (
    <TextInput
      style={inputStyle}
      placeholderTextColor={placeholderTextColor || colors.inputBorder}
      {...props}>
      {children}
    </TextInput>
  );
};

export default Input;
