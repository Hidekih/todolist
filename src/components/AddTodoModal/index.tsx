import React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../Button';
import { Input } from '../Input';
import { addTodo } from '../../store/actions/todo';

import styles from './styles';
import { useDispatch } from 'react-redux';

type AddToDoModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
}

export function AddToDoModal({ isOpen, toggleModal }: AddToDoModalProps) {
  const dispatch = useDispatch();
  const [ isImportant, setIsImportant ] = useState(false);
  const [ todoTitle, setTodoTitle ] = useState('');

  function handleSetIsImportant(isImportant: boolean) {
    setIsImportant(isImportant);
  }

  function handleSubmit() {
    dispatch(addTodo(
      todoTitle,
      isImportant
    ));

    toggleModal();
    setTodoTitle('');
    setIsImportant(false);
  }

  return (
    <Modal 
      animationType="slide" 
      transparent={true} 
      visible={isOpen} 
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }} >
        <TouchableOpacity style={{ flex: 1 }} onPress={toggleModal} />
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'android' ? 'padding' : 'position' } 
          style={{ flex: 1}} 
          contentContainerStyle={{ flex: 1}}
        >
          <View style={styles.modalContent}>
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
                  styles.modalSelectImportantButton ,
                  isImportant
                  ? styles.modalSelectImportantButtonNotSelected
                  : {}
                ]}>
                  <Text style={styles.modalSelectImportantButtonText}>Não</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSetIsImportant(true)}>
                <View style={[
                  styles.modalSelectImportantButton ,
                  isImportant
                  ? {}
                  : styles.modalSelectImportantButtonNotSelected
                ]}>
                  <Text style={styles.modalSelectImportantButtonText}>Sim</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Button 
              style={styles.modalSubmitButton} 
              title="Adicionar nova tarefa"
              onPress={handleSubmit}
            />
          </View>
    
        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}