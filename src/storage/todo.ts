import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export type TodoProps = {
  id: number;
  title: string;
  isImportant: boolean;
};

export async function load() {
  try {
    const data = await AsyncStorage.getItem('@todolist:list');
    const parsedData = data ? JSON.parse(data) as TodoProps[] : [];

    console.log(parsedData)

    return parsedData;
  } catch {
    Alert.alert(
      "Erro",
      "Não foi possível carregar os dados da aplicação",
      [
        { text: "OK" }
      ]
    );
  }
};

export async function save(todoTitle: string, isImportant: boolean) {
  try {
    const data = await AsyncStorage.getItem('@todolist:list');
    const parsedData = data ? JSON.parse(data) as TodoProps[] : [];

    const todo = {
      id: parsedData.length,
      title: todoTitle,
      isImportant,
    };

    await AsyncStorage.setItem('@todolist:list', JSON.stringify([
      ...parsedData,
      todo
    ]));

    console.log(todo)

    return;
  } catch {
    Alert.alert(
      "Erro",
      "Não foi possível salvar a nova tarefa. Tente novamente.",
      [
        { text: "OK" }
      ]
    );
  }
};

export async function remove(id: number) {
  try {
    const data = await AsyncStorage.getItem('@todolist:list');
    const parsedData = data ? JSON.parse(data) as TodoProps[] : [];
    
    const updatedList = parsedData.filter(todo => todo.id !== id);

    await AsyncStorage.setItem('@todolist:list', JSON.stringify(updatedList));

    return updatedList;
  } catch {
    Alert.alert(
      "Erro",
      "Não foi possível remover a tarefa. Tente novamente.",
      [
        { text: "OK" }
      ]
    );
  }
};
