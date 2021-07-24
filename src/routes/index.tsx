import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { ImportantTodo } from '../pages/ImportantTodo';

const Stack = createStackNavigator();

export function Routes() {
  const user = true;
  
  return (
    <Stack.Navigator headerMode="none">
      { user ? (
        <>
          <Stack.Screen name="Home" component={Home}/>

          <Stack.Screen name="ImportantTodo" component={ImportantTodo}/>
        </>
      ) : (
        <Stack.Screen name="Welcome" component={Welcome}/>
      )}
    </Stack.Navigator>
  )
}