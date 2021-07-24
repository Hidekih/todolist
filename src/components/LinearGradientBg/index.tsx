import React from 'react';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

import styles from './styles';

export function LinearGradientBg({ ...rest }: LinearGradientProps) {
  return <LinearGradient style={styles.container} {...rest} />
}
