import { createStore, Reducer } from 'redux';
import { TodoProps } from '../../storage/todo';

export type TodoReducerProps = {
  todoAmount: number;
  todoList: TodoProps[];
}

type ToDoActions = {
  type: '@todo/SET_TODOLIST' | '@todo/ADD_TODO' | '@todo/REMOVE_TODO';
  payload: {
    todoList?: TodoProps[];
    title?: string;
    isImportant?: boolean;
  };
}

const INITIAL_STATE: TodoReducerProps = {
  todoAmount: 0,
  todoList: [],
};

export const todoReducer: Reducer<TodoReducerProps, ToDoActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@todo/SET_TODOLIST': 
      if (action.payload.todoList) {
        return { ...state, todoList: action.payload.todoList , todoAmount: action.payload.todoList?.length }
      }
      break;

    case '@todo/ADD_TODO': 
      return { 
        todoList: [ ...state.todoList, { 
          id: state.todoList.length + 1,
          title: action.payload.title,
          isImportant: action.payload.isImportant
        } as TodoProps ], 
        todoAmount: state.todoAmount + 1
      }
    ;

    default: break;
  }

  return state;
}

export const store = createStore(todoReducer);


