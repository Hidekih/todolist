import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export function Input({ style ,...rest }: TextInputProps) {
  return (
    <TextInput style={[ style, styles.textInput ]} { ...rest } />
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: 280,
    height: 32,
    marginHorizontal: 18,
    fontSize: 18,
    textAlign: 'center',
    borderBottomColor: '#222',
    borderBottomWidth: 2,
  }
})