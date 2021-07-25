import React, { useEffect, useCallback, useMemo } from 'react';
import { 
  View, 
  ScrollView, 
  Text, 
  Image,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TodoCard } from '../../components/TodoCard';
import Colors from '../../styles/colors';

import tasksImg from '../../assets/tasks.png';
import arrowLeft from '../../assets/arrow-left.png';

import { LinearGradientBg } from '../../components/LinearGradientBg';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Header } from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { fetchTodo, removeTodo } from '../../store/actions/todo';

export function ImportantTodo() {
  const { goBack } = useNavigation();

  const { todoAmount, todoList } = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch();

  const importantTodo = useMemo(() => {
    return  todoList.filter(todo => todo.isImportant );
  },[todoList]);

  const importantTodoAmount = useMemo(() => {
    return importantTodo.length;
  }, [importantTodo]);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={styles.container}>
      <LinearGradientBg 
        colors={[ Colors.background_primary, Colors.background_secondary ]}
      />
      <Header canGoBack={true} />

      { importantTodo.length > 0 ? (
        <>
          {importantTodoAmount > 1 ? (
            <Text style={styles.listTitle}>
              Você tem <Text style={styles.bold}>{importantTodoAmount}</Text> tarefas <Text style={styles.bold}>importantes!</Text>
            </Text>
          ) : (
            <Text style={styles.listTitle}>
              Você tem <Text style={styles.bold}>{importantTodoAmount}</Text> tarefa <Text style={styles.bold}>importante!</Text>
            </Text>
          )}

          <ScrollView>
            { importantTodo.map(todo => (
              <TodoCard 
                key={todo.id}
                title={todo.title} 
                isImportant={todo.isImportant} 
                handleDelete={() => dispatch(removeTodo(todo.id))} 
              />
            ))}
          </ScrollView>

          <Text style={styles.listTitle}>
            Você tem <Text style={styles.bold}>{todoAmount}</Text>
            { todoAmount > 1 ? ' tarefas ' : ' tarefa '}
            no <Text style={styles.bold}>total!</Text>
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.listTitle}>
            Adicione sua primeira tarefa importante!
          </Text>
          <View style={styles.noContent}>
            <Image source={tasksImg} resizeMode="contain" />
          </View>
        </>
      )}
      <View style={styles.bottom}>
       
        <RectButton style={styles.button} onPress={handleGoBack}>
          <Image source={arrowLeft} />
          <Text style={styles.buttonText}>Ver todos</Text>
        </RectButton>
      </View>

    </View>
  )
};
