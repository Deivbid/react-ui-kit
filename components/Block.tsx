import { View, StyleSheet } from 'react-native';
import React from 'react';

const Block = ({ children, flex, row, color, align, justify, style, ...props }: any) => {
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && { flex },
    row !== undefined && { flexDirection: 'row' },
    color !== undefined && { backgroundColor: color },
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
    style,
  ]);

  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default Block;
