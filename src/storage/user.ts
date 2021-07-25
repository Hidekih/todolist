import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export async function load() {
  try {
    const name = await AsyncStorage.getItem('@todolist:userName');
    
    return name;
  } catch (err) {
    Alert.alert(
      "Erro",
      "Não foi possível carregar os dados da aplicação",
      [
        { text: "OK" }
      ]
    );
  }
};

export async function save(name: string) {
  try {
    await AsyncStorage.setItem('@todolist:userName', name);

    return;
  } catch (err) {
    Alert.alert(
      "Erro",
      "Não foi possível salvar o seu nome, tente novamente.",
      [
        { text: "OK" }
      ]
    );
  }
};

