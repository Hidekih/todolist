import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[ style, styles.button ]} { ...rest } >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
