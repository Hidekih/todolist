import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Colors from '../../styles/colors';

export function TodoCard() {
  return (
    <View style={styles.cardCover}>
      <Swipeable overshootRight={false} renderRightActions={() => (
        <View style={styles.actionContainer}>
          <Text>Trash</Text>
        </View>
      )} >
        <View style={styles.card}>
          <Text style={styles.cardText}>Estudar.</Text>
        </View>
      </Swipeable>
    </View>
  )
}

const styles = StyleSheet.create({
  cardCover: {
    marginTop: 8,
    marginBottom: 10,
    marginHorizontal: 18,
    height: 68,
    borderRadius: 12,
    backgroundColor: Colors.red,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  card: {
    height: 68,
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    color: Colors.title,
    fontSize: 18,
  },
  actionContainer: {
    width: 68,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center'
  },
})