import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Colors from './src/styles/colors';

import { LinearGradientBg } from './src/components/LinearGradientBg';
import { Routes } from './src/routes';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.background_primary} barStyle="dark-content" />
      <LinearGradientBg
        colors={[ Colors.background_primary, Colors.background_secondary ]} 
      />
      <Routes />

    </NavigationContainer>
      </SafeAreaView>
  );
};

export default App;
