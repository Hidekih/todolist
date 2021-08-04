import { Dispatch } from 'redux';
import { TodoProps, save, load, remove } from '../../storage/todo';

export function setTodoList(todoList: TodoProps[]) {
  return {
    type: '@todo/SET_TODOLIST',
    payload: {
      todoList
    }
  }
}

export function fetchTodo(){
  return (dispath: Dispatch) => {
    return load().then(data => {
      if (data) {
        dispath(setTodoList(data));
      }
    });
  }
}

function reducerAddTodo({ id, isImportant, title }: TodoProps) {
  return {
    type: '@todo/ADD_TODO',
    payload: {
      id,
      title,
      isImportant,
    }
  }
};

export function addTodo(title: string, isImportant: boolean) {
  return (dispath: Dispatch) => {
    return save(title, isImportant).then(data => {
      if (data) {
        dispath(reducerAddTodo(data));
      }
    });
  }
}

export function removeTodo(id: number) {
  return (dispath: Dispatch) => {
    return remove(id).then(data => {
      if (data) {
        dispath(setTodoList(data));
      }
    });
  }
}