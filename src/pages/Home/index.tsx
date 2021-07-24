import React, { useCallback } from 'react';
import {
  View, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  Image,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TodoCard } from '../../components/TodoCard';
import Colors from '../../styles/colors';

import plusIcon from '../../assets/plus.png';
import arrowRight from '../../assets/arrow-right.png';

import dashboardImg from '../../assets/dashboard.png';

import { LinearGradientBg } from '../../components/LinearGradientBg';
import { AddToDoModal } from '../../components/AddTodoModal';

import styles from './styles';
import { useNavigation } from '@react-navigation/core';

export function Home() {
  const { navigate } = useNavigation();

  function handleOpenModal() {};

  const handleNavigate = useCallback(() => {
    navigate('ImportantTodo');
  }, [navigate]);

  function handleAddTodo() {};

  function handleDeleteTodo() {};

  return (
    <View style={styles.container}>
      <LinearGradientBg 
        colors={[ Colors.background_primary, Colors.background_secondary ]}
      />
      <AddToDoModal />
      <View style={styles.header}>
        <View style={styles.headerButton} />

        <Text style={styles.title}>
          Olá, <Text style={styles.bold}>Alexandre</Text> 
        </Text>
  
        <TouchableOpacity>
          <View style={styles.headerButton}>
            <Image source={plusIcon}/>
          </View>
        </TouchableOpacity>
      </View>

      { [].length > 0 ? (
        <>
          <Text style={styles.listTitle}>
            Você tem <Text style={styles.bold}>5</Text> tarefas para realizar!
          </Text>
          <ScrollView>
          
            <TodoCard title={'Estudar Redux'} isImportant={true} handleDelete={() => console.log('s  ')} />
            <TodoCard title={'Estudar Mandioca'} isImportant={false} handleDelete={() => console.log('s')} />
            <TodoCard title={'Estudar Pastel'} isImportant={false} handleDelete={() => console.log('s')} />

          </ScrollView>
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
      
      <View style={styles.bottom}>
        <RectButton style={styles.button} onPress={handleNavigate} >
          <Text style={styles.buttonText}>Ver importantes</Text>
          <Image source={arrowRight} />
        </RectButton>
      </View>

    </View>
  )
};
