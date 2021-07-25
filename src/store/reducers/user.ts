import { createStore, Reducer, Middleware, applyMiddleware } from 'redux';

export type UserNameProps = {
  name: string;
};

export type UserNameActionsProps = {
  type: '@user/SET_NAME';
  payload: {
    name: string;
  }
}

const INITIAL_STATE = {
  name: '',
};

export const userReducer: Reducer<UserNameProps, UserNameActionsProps> 
  = (state = INITIAL_STATE, action) => {
  if(action.type === '@user/SET_NAME') {
    return { ...state, name: action.payload.name}
  }
  return state;
}

export const store = createStore(userReducer);

