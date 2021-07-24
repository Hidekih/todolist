import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';

export function Input({ style ,...rest }: TextInputProps) {
  return (
    <TextInput style={[ style, styles.textInput ]} { ...rest } />
  )
}
