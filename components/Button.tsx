import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';

interface IButton extends TouchableOpacityProps {
  children?: React.ReactNode;
  color?: ViewStyle['backgroundColor'];
  radius?: ViewStyle['borderRadius'];
  padding?: ViewStyle['padding'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  paddingVertical?: ViewStyle['paddingVertical'];
  margin?: ViewStyle['margin'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  marginVertical?: ViewStyle['marginVertical'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  style?: StyleProp<ViewStyle>;
  center?: boolean;
}

const Button = ({
  children,
  color,
  radius,
  padding,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  paddingVertical,
  margin,
  marginTop,
  marginBottom,
  marginHorizontal,
  marginVertical,
  align,
  justify,
  style,
  center,
  activeOpacity = 0.8,
  ...props
}: IButton) => {
  const { sizes } = useTheme();
  const buttonStyle = StyleSheet.flatten([
    {
      height: sizes.buttonHeight,
      borderRadius: sizes.buttonRadius,
      border: sizes.buttonBorder,
      paddingHorizontal: sizes.base,
    },
    color !== undefined && { backgroundColor: color },
    radius !== undefined && { borderRadius: radius },
    padding !== undefined && { padding },
    paddingTop !== undefined && { paddingTop },
    paddingBottom !== undefined && { paddingBottom },
    paddingHorizontal !== undefined && { paddingHorizontal },
    paddingVertical !== undefined && { paddingVertical },
    margin !== undefined && { margin },
    marginTop !== undefined && { marginTop },
    marginBottom !== undefined && { marginBottom },
    marginHorizontal !== undefined && { marginHorizontal },
    marginVertical !== undefined && { marginVertical },
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
    center !== undefined && { alignItems: 'center', justifyContent: 'center' },
    style,
  ]) as ViewStyle;

  return (
    <TouchableOpacity activeOpacity={activeOpacity} style={buttonStyle} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
