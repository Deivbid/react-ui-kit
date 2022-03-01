import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({
  children,
  color,
  radius,
  padding,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  paddingVerical,
  style,
  ...props
}: any) => {
  const buttonStyle = StyleSheet.flatten([
    color !== undefined && { backgroundColor: color },
    radius !== undefined && { borderRadius: radius },
    padding !== undefined && { padding },
    paddingTop !== undefined && { paddingTop },
    paddingBottom !== undefined && { paddingBottom },
    paddingHorizontal !== undefined && { paddingHorizontal },
    paddingVerical !== undefined && { paddingVerical },
    style,
  ]);

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
