import React from "react";
import { View, Image, Text } from "react-native";
import welcomeImg from '../../assets/welcome.png';

export function Welcome() {
  return (
    <View style={{flex: 1}}>
      <Image source={welcomeImg} resizeMode="contain" />
      <Text>Bem vindo!</Text>
      <Text>Digite seu nome para começar a anotar suas tarefas!</Text>
    </View>
  )
}