import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { TodoCard } from '../../components/TodoCard';

import Colors from '../../styles/colors';

export function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View ></View>

        <Text style={styles.headerTitle}>
          Olá, <Text style={styles.bold}>Alexandre</Text> 
        </Text>

        <View>
          <TouchableOpacity>
            <Text style={styles.bold}>+</Text> 
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        

        <TodoCard />


      </ScrollView>
      

      <View style={styles.bottom}>
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>Ver importantes -</Text>
        </RectButton>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    height: 56,
  },
  headerTitle: {
    fontSize: 22,
    color: Colors.title,
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  


  



  bottom: {
    alignItems: 'center',
    paddingTop: 8,
  },
  button: {
    width: 280,
    height: 52,
    marginHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#7C93B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f9f9f9',
  }
})