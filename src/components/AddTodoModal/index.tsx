import React from 'react';
import { KeyboardAvoidingView, Modal, Platform, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../Button';
import { Input } from '../Input';

import styles from './styles';

export function AddToDoModal() {
  return (
    <Modal animationType="slide" transparent={true} visible={false} onRequestClose={() => console.log('Quer fechar o modal.')}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}>
        <View style={{ flex: 1 }} />
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'android' ? 'padding' : 'position' } 
          style={{ flex: 1}} 
          contentContainerStyle={{ flex: 1}}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicione uma nova tarefa</Text>
            <Input style={styles.modalInput} placeholder="Digite aqui a nova tarefa" />
            <Text style={styles.modalTitle}>Deseja marcar como importante?</Text>

            <View style={styles.modalSelectImportantButtonsContainer}>
              <TouchableOpacity>
                <View style={[
                  styles.modalSelectImportantButton ,
                  true
                  ? {}
                  : styles.modalSelectImportantButtonNotSelected
                ]}>
                  <Text style={styles.modalSelectImportantButtonText}>Não</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
              <View style={[
                  styles.modalSelectImportantButton ,
                  false
                  ? {}
                  : styles.modalSelectImportantButtonNotSelected
                ]}>
                  <Text style={styles.modalSelectImportantButtonText}>Sim</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Button style={styles.modalSubmitButton} title="Adicionar nova tarefa"></Button>
          </View>
    
        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}