import React from "react";
import { 
  View, 
  Image, 
  Text, 
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Colors from '../../styles/colors';

import { LinearGradientBg } from '../../components/LinearGradientBg';
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';

import welcomeImg from '../../assets/welcome.png';

import styles from './styles';

export function Welcome() {
  return (
    <View style={styles.container}>
      <LinearGradientBg 
        colors={[ Colors.background_primary, Colors.background_secondary ]}
      />
      <KeyboardAvoidingView keyboardVerticalOffset={0} behavior={Platform.OS === 'android' ? 'padding' : 'position' } >
        <View style={styles.content}>
          <Image source={welcomeImg} resizeMode="contain" style={styles.image}/>
          <Text style={styles.title}>Bem vindo!</Text>
          <Text style={styles.text}>Digite seu nome para começar a anotar suas tarefas!</Text>
          <Input style={styles.input} placeholder="Digite aqui seu nome" />
          <Button style={styles.button} title="Avançar" />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
