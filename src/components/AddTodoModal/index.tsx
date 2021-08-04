import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../Button';
import { Input } from '../Input';
import { addTodo } from '../../store/actions/todo';

import styles from './styles';
import { useDispatch } from 'react-redux';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

type AddToDoModalProps = {
  toggleModal: () => void;
}

export const AddToDoModal = gestureHandlerRootHOC(function ({ toggleModal }: AddToDoModalProps) {
  const [ isImportant, setIsImportant ] = useState(false);
  const [ todoTitle, setTodoTitle ] = useState('');
  const dispatch = useDispatch();

  function handleSetIsImportant(isImportant: boolean) {
    setIsImportant(isImportant);
  }

  function handleSubmit() {
    if(!todoTitle) {
      return;
    }

    dispatch(addTodo(
      todoTitle,
      isImportant
    ));
    
    toggleModal();
    setTodoTitle('');
    setIsImportant(false);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }} >
      <TouchableOpacity style={{ flex: 1 }} onPress={toggleModal} />
        <View style={styles.modalContent}>
        <KeyboardAvoidingView 
          behavior="position"
          style={{ flex: 1 }} 
          contentContainerStyle={{ flex: 1, alignItems: 'center',}}
        >
          <Text style={styles.modalTitle}>Adicione uma nova tarefa</Text>
          <Input 
            style={styles.modalInput} 
            placeholder="Digite aqui a nova tarefa" 
            value={todoTitle}
            onChangeText={text => setTodoTitle(text)}
          />
          <Text style={styles.modalTitle}>Deseja marcar como importante?</Text>

          <View style={styles.modalSelectImportantButtonsContainer}>
            <TouchableOpacity onPress={() => handleSetIsImportant(false)}>
              <View style={[
                styles.modalSelectImportantButton,
                isImportant
                  ? styles.modalSelectImportantButtonNotSelected
                  : {}
              ]}>
                <Text style={styles.modalSelectImportantButtonText}>Não</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSetIsImportant(true)}>
              <View style={[
                styles.modalSelectImportantButton,
                isImportant 
                  ? {}
                  : styles.modalSelectImportantButtonNotSelected
              ]}>
                <Text style={styles.modalSelectImportantButtonText}>Sim</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <Button style={styles.modalSubmitButton} title="Adicionar tarefa" onPress={handleSubmit} />
        </KeyboardAvoidingView>
      </View>

    </View>
  );
});
