import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import plusIcon from '../../assets/plus.png';
import arrowLeft from '../../assets/arrow-left.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../store/reducers';
import { toggleModal } from '../../store/actions/modal';
import { AddToDoModal } from '../AddTodoModal';

type HeaderProps = {
  canGoBack: boolean;
}

export function Header({ canGoBack }: HeaderProps) {
  const { goBack } = useNavigation();
  const { name } = useSelector((state: RootState) => state.userReducer);

  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.modalReducer);

  function handleToggleModal() {
    dispatch(toggleModal(isOpen))
  };

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <>
      <AddToDoModal isOpen={isOpen} toggleModal={handleToggleModal} />
      <View style={styles.header}>
        { canGoBack ? (
          <TouchableOpacity onPress={handleGoBack}>
            <View style={styles.headerButton}>
              <Image source={arrowLeft}/>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.headerButton} />
        )}

        <Text style={styles.title}>
          Olá, <Text style={styles.bold}>{name}</Text> 
        </Text>

        <TouchableOpacity onPress={handleToggleModal}>
          <View style={styles.headerButton}>
            <Image source={plusIcon}/>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}
