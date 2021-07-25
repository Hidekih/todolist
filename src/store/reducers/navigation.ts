import { createStore, Reducer } from 'redux';

export type NavigationReducerProps = {
  initialRouteName: 'Home' | 'Welcome' | undefined;
}

type NavigationActions = {
  type: 'SET_INITIAL_ROUTE';
  payload: {
    userName: string;
  }
}

const INITIAL_STATE: NavigationReducerProps = {
  initialRouteName: undefined,
};

export const navigationReducer: Reducer<NavigationReducerProps, NavigationActions> = 
  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_INITIAL_ROUTE': 
      if (action.payload.userName) {
        return { initialRouteName: 'Home' }
      }

      return { initialRouteName: 'Welcome' }
    ;

    default: break;
  }

  return state;
}

export const store = createStore(navigationReducer);

