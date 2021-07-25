import { createStore, Reducer, Middleware, applyMiddleware } from 'redux';
import { load as loadName } from '../../storage/user';

export type UserNameProps = {
  name: string;
};

export type UserNameActionsProps = {
  type: 'SET_NAME';
  payload: {
    name: string;
  }
}

const INITIAL_STATE = {
  name: '',
};

const asyncFunctionMiddleware: Middleware = storeAPI => next => action => {
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  return next(action)
}

export const userReducer: Reducer<UserNameProps, UserNameActionsProps> = 
  (state = INITIAL_STATE, action) => {
  if(action.type === 'SET_NAME') {
    return { ...state, name: action.payload.name}
  }
  return state;
}

export const store = createStore(userReducer);

