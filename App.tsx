import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import { LinearGradientBg } from './src/components/LinearGradientBg';
import Routes from './src/routes';
import store from './src/store/reducers';

import Colors from './src/styles/colors';

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.background_primary} barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradientBg
          colors={[ Colors.background_primary, Colors.background_secondary ]} 
        />
        <Routes />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
