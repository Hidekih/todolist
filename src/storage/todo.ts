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
      id: parsedData.length + 1,
      title: todoTitle,
      isImportant,
    };

    await AsyncStorage.setItem('@todolist:list', JSON.stringify([
      ...parsedData,
      todo
    ]));

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

    const listUpdatedId = updatedList.map((todo, index) => {
      return {
        ...todo,
        id: index
      }
    })

    await AsyncStorage.setItem('@todolist:list', JSON.stringify(listUpdatedId));

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
