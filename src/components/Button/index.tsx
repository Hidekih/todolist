import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
}

export function Button({ title, style, ...rest }: ButtonProps) {
  return (
    <RectButton style={[ style, styles.button ]} { ...rest } >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </RectButton>
  )
}
