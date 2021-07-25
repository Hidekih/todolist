import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, 
  ScrollView, 
  Text,
  Image,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TodoCard } from '../../components/TodoCard';
import Colors from '../../styles/colors';

import arrowRight from '../../assets/arrow-right.png';

import dashboardImg from '../../assets/dashboard.png';

import { LinearGradientBg } from '../../components/LinearGradientBg';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import Header from '../../components/Header';
import { RootState } from '../../store/reducers';
import { fetchTodo, removeTodo } from '../../store/actions/todo';
import { useEffect } from 'react';

export function Home() {
  const { navigate } = useNavigation();
  const { todoAmount, todoList } = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch();

  const handleNavigate = useCallback(() => {
    navigate('ImportantTodo');
  }, [navigate]);

  return (
    <View style={styles.container}>
      <LinearGradientBg 
        colors={[ Colors.background_primary, Colors.background_secondary ]}
      />
      <Header canGoBack={false} />

      { todoList.length > 0 ? (
        <>
          <Text style={styles.listTitle}>
            Você tem <Text style={styles.bold}>{todoAmount}</Text> tarefas para realizar!
          </Text>
          <ScrollView>
            { todoList.map(todo => (
              <TodoCard key={todo.id} 
                title={todo.title} 
                isImportant={todo.isImportant} 
                handleDelete={() => dispatch(removeTodo(todo.id))}
              />
            ))}
           
          </ScrollView>
          <View style={styles.bottom}>
            <RectButton style={styles.button} onPress={handleNavigate} >
              <Text style={styles.buttonText}>Ver importantes</Text>
              <Image source={arrowRight} />
            </RectButton>
          </View>

        </>
      ) : (
        <>
          <Text style={styles.listTitle}>
            Adicione sua primeira tarefa!
          </Text>
          <View style={styles.noContent}>
            <Image source={dashboardImg} resizeMode="contain" />
          </View>
        </>
      )}
      
    </View>
  )
};
