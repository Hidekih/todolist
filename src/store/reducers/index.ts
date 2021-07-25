import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { todoReducer, TodoReducerProps } from './todo';
import { userReducer, UserNameProps } from './user';
import { navigationReducer, NavigationReducerProps } from './navigation';
import { modalReducer, ModalReducerProps } from './modal';

export type RootState = {
  todoReducer: TodoReducerProps;
  userReducer: UserNameProps;
  modalReducer: ModalReducerProps;
  navigationReducer: NavigationReducerProps;
}

const store = createStore(combineReducers({
  todoReducer, 
  userReducer,
  modalReducer,
  navigationReducer,
}),
  applyMiddleware(thunk)
);

export default store;