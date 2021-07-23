import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

export function LinearGradientBg({ ...rest }: LinearGradientProps) {
  return <LinearGradient style={styles.container} {...rest} />
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
})