import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Welcome } from './src/pages/Welcome';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Welcome/>
    </SafeAreaView>
  );
};

export default App;
