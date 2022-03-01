import { Text as RNText, StyleSheet, TextStyle, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';

interface IText extends TextStyle {
  children?: React.ReactNode;
  size?: TextStyle['fontSize'];
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  p?: boolean;
  color?: TextStyle['color'];
  weight?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];
  style?: StyleProp<TextStyle>;
  margin?: TextStyle['margin'];
  marginTop?: TextStyle['marginTop'];
  marginBottom?: TextStyle['marginBottom'];
  marginHorizontal?: TextStyle['marginHorizontal'];
  marginVertical?: TextStyle['marginVertical'];
  padding?: TextStyle['padding'];
  paddingTop?: TextStyle['paddingTop'];
  paddingBottom?: TextStyle['paddingBottom'];
  paddingHorizontal?: TextStyle['paddingHorizontal'];
  paddingVertical?: TextStyle['paddingVertical'];
}

const Text = ({
  children,
  size,
  h1,
  h2,
  h3,
  h4,
  p,
  color,
  weight,
  align,
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
  style,
  ...props
}: IText) => {
  const { sizes, fontWeights, lines, letters, colors } = useTheme();

  const textStyle = StyleSheet.flatten([
    {
      fontSize: sizes.text,
      lineHeight: lines.text,
      letterSpacing: letters.text,
      color: colors.text,
    },
    h1 !== undefined && {
      fontSize: sizes.h1,
      lineHeight: lines.h1,
      fontWeight: fontWeights.bold,
      letterSpacing: letters.h1,
    },
    h2 !== undefined && {
      fontSize: sizes.h2,
      lineHeight: lines.h2,
      fontWeight: fontWeights.semiBold,
      letterSpacing: letters.h2,
    },
    h3 !== undefined && {
      fontSize: sizes.h3,
      lineHeight: lines.h3,
      fontWeight: fontWeights.simple,
      letterSpacing: letters.h3,
    },
    h4 !== undefined && {
      fontSize: sizes.h4,
      lineHeight: lines.h4,
      fontWeight: fontWeights.light,
      letterSpacing: letters.h4,
    },
    p !== undefined && { fontSize: sizes.p, lineHeight: lines.p, letterSpacing: letters.p },
    size !== undefined && { fontSize: size },
    weight !== undefined && { fontWeight: weight },
    color !== undefined && { color },
    align !== undefined && { textAlign: align },
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
  ]) as TextStyle;

  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
