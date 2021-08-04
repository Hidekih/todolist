import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/colors';
import trashIcon from '../../assets/trash.png';

import styles from './styles';

type TodoCardProps = {
  title: string;
  isImportant: boolean;
  handleDelete: () => void;
}

export function TodoCard({ title, isImportant, handleDelete }: TodoCardProps) {
  return (
    <View style={styles.container}>
      <Swipeable overshootRight={false} renderRightActions={() => (
        <TouchableOpacity onPress={handleDelete}>
          <View style={styles.actionContainer}>
            <Image source={trashIcon} />
          </View>
        </TouchableOpacity>
      )} >
        <LinearGradient 
          style={styles.bgGradient} 
          colors={[ Colors.white, isImportant ? Colors.red : Colors.background_primary ]}
          start={{x: 0, y: 1}} end={{x: 3, y: 1 }}
        />
        <View style={styles.card}>
          <Text style={[
            { fontWeight: isImportant ? '500' : '400' },
            styles.cardText
          ]}>{title}</Text>
        </View>
      </Swipeable>
    </View>
  )
}
