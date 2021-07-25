import { ActionCreator } from 'redux';
import { TodoProps } from '../../storage/todo';
import { save, load, remove } from '../../storage/todo';

export function setTodoList(todoList: TodoProps[]) {
  return {
    type: '@todo/SET_TODOLIST',
    payload: {
      todoList
    }
  }
}

export function fetchTodo(){
  return (dispath) => {
    return load().then(data => {
      if (data) {
        dispath(setTodoList(data));
      }
      return;
    });
  }
}

function reducerAddTodo(title: string, isImportant: boolean) {
  return {
    type: '@todo/ADD_TODO',
    payload: {
      title,
      isImportant
    }
  }
};

export function addTodo(title: string, isImportant: boolean) {
  return (dispath) => {
    return save(title, isImportant).then(_ => {
      dispath(reducerAddTodo(title, isImportant));
      return;
    });
  }
}

export function removeTodo(id: number) {
  return (dispath) => {
    return remove(id).then(data => {
      if (data) {
        dispath(setTodoList(data));
      }
      return;
    });
  }
}