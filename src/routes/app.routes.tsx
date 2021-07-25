import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack'; 

import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { ImportantTodo } from '../pages/ImportantTodo';

import { fetchName } from "../store/actions/user";
import { setInitialRoute } from "../store/actions/navigation";
import { RootState } from '../store/reducers';
import { ActivityIndicator, View } from 'react-native';
import { load, save } from '../storage/user';
import { fetchTodo } from '../store/actions/todo';

const Stack = createStackNavigator();

export function AppRoutes() {
  const dispatch = useDispatch();
  const { initialRouteName } = useSelector((state: RootState) => state.navigationReducer);

  useEffect(() => {
    async function fethData() {
      dispatch(fetchName());
      dispatch(fetchTodo());
      const name = await load()
      if (name) {
        dispatch(setInitialRoute(name));
      }
      dispatch(setInitialRoute(''));
    }

    fethData();
  }, []);

  if (!initialRouteName) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size='large' color="#222" />
      </View>
    )
  }
  
  return (
    <Stack.Navigator headerMode="none" initialRouteName={initialRouteName}>
      <Stack.Screen name="Welcome" component={Welcome}/>

      <Stack.Screen name="Home" component={Home}/>

      <Stack.Screen name="ImportantTodo" component={ImportantTodo}/>
    </Stack.Navigator>
  )
}
