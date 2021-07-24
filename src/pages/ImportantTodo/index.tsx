import React from 'react';
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
import arrowLeft from '../../assets/arrow-left.png';
import tasksImg from '../../assets/tasks.png';

import { LinearGradientBg } from '../../components/LinearGradientBg';
import { AddToDoModal } from '../../components/AddTodoModal';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import styles from './styles';

export function ImportantTodo() {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  function handleOpenModal() {};

  function handleAddTodo() {};

  function handleDeleteTodo() {};

  return (
    <View style={styles.container}>
      <LinearGradientBg 
        colors={[ Colors.background_primary, Colors.background_secondary ]}
      />
      <AddToDoModal />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <View style={styles.headerButton}>
            <Image source={arrowLeft}/>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>
          Olá, <Text style={styles.bold}>Alexandre</Text> 
        </Text>
  
        <TouchableOpacity>
          <View style={styles.headerButton}>
            <Image source={plusIcon}/>
          </View>
        </TouchableOpacity>
      </View>

      { [1].length > 0 ? (
        <>
          <Text style={styles.listTitle}>
            Você tem <Text style={styles.bold}>3</Text> tarefas <Text style={styles.bold}>importantes!</Text>
          </Text>
          <ScrollView>
          
            <TodoCard title={'Estudar Redux'} isImportant={true} handleDelete={() => console.log('s  ')} />
            <TodoCard title={'Estudar Mandioca'} isImportant={true} handleDelete={() => console.log('s')} />
            <TodoCard title={'Estudar Pastel'} isImportant={true} handleDelete={() => console.log('s')} />

          </ScrollView>
          <Text style={styles.listTitle}>
            Você tem <Text style={styles.bold}>5</Text> tarefas no <Text style={styles.bold}>total!</Text>
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
