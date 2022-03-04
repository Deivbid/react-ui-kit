import { View, StyleSheet, ViewStyle, StyleProp, ViewProps } from 'react-native';
import React from 'react';

interface IBlock extends ViewProps {
  children?: React.ReactNode;
  flex?: ViewStyle['flex'];
  row?: boolean;
  column?: boolean;
  color?: ViewStyle['backgroundColor'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
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
  radious?: ViewStyle['borderRadius'];
  center?: boolean;
  radius?: ViewStyle['borderRadius'];
  style?: StyleProp<ViewStyle>;
}

const Block = ({
  children,
  flex,
  row,
  column,
  color,
  align,
  justify,
  style,
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
  center,
  radius,
  ...props
}: IBlock) => {
  const blockStyle = StyleSheet.flatten([
    center !== undefined && { alignItems: 'center', justifyContent: 'center' },
    flex !== undefined && { flex },
    row !== undefined && { flexDirection: 'row' },
    column !== undefined && { flexDirection: 'column' },
    color !== undefined && { backgroundColor: color },
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
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
    radius !== undefined && { borderRadius: radius },
    style,
  ]) as ViewStyle;

  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default Block;
