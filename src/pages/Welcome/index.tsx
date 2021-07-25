import React from "react";
import { 
  View, 
  Image, 
  Text, 
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../store/reducers'

import { LinearGradientBg } from '../../components/LinearGradientBg';
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';

import Colors from '../../styles/colors';
import welcomeImg from '../../assets/welcome.png';

import styles from './styles';
import { save } from "../../storage/user";
import { useNavigation } from "@react-navigation/native";
import { setName } from "../../store/actions/user";

export const Welcome = () => {
  const { name } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  function handleSubmit() {
    save(name);
    navigate('Home');
  }

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
          <Input 
            style={styles.input} 
            placeholder="Digite aqui seu nome" 
            value={name}
            onChangeText={text => dispatch(setName(text))}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <Button style={styles.button} title="Avançar" onPress={handleSubmit}/>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

