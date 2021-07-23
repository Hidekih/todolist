import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Colors from '../../styles/colors';

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

const styles = StyleSheet.create({
  button: {
    width: 280,
    height: 52,
    marginHorizontal: 18,
    borderRadius: 12,
    backgroundColor: Colors.background_primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f9f9f9',
  }
})