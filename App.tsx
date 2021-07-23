import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from './src/styles/colors';

import { Welcome } from './src/pages/Welcome';
import { Dashboard } from './src/pages/Dashboard';


function App() {
  console.log(Colors)
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient 
        style={styles.linearGradientBg} 
        colors={[ Colors.background_primary, Colors.background_secondary ]} 
      />
      <StatusBar backgroundColor={Colors.background_primary} barStyle="dark-content" />
      <Dashboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  linearGradientBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
})

export default App;
