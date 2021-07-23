import React from "react";
import { 
  View, 
  Image, 
  Text, 
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import { Button } from "../../components/Button";
import { Input } from '../../components/Input';

import welcomeImg from '../../assets/welcome.png';
import Colors from '../../styles/colors';

export function Welcome() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.content}>
        <Image source={welcomeImg} resizeMode="contain" style={styles.image}/>
        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.text}>Digite seu nome para começar a anotar suas tarefas!</Text>
        <Input style={styles.input} placeholder="Digite aqui seu nome"/>
        <Button style={styles.button} title="Avançar" />
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center'
  },
  image: {
    marginHorizontal: 18,
  },
  title: {
    marginTop: 24,
    fontSize: 22,
    color: Colors.title,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    marginTop: 8,
    fontSize: 20,
    color: '#222222',
    textAlign: 'center',
    marginHorizontal: 18,
  },
  input: {
    marginTop: 24,
  },
  button: {
    marginTop: 24,
  }
})