import { createStore, Reducer } from 'redux';

export type ModalReducerProps = {
  isOpen: boolean;
}

export type ModalActionTypes = '@modal/TOGGLE_MODAL'

type ModalActions = {
  type: ModalActionTypes;
  payload: {
    isOpen: boolean;
  }
}

const INITIAL_STATE: ModalReducerProps = {
  isOpen: false,
};

export const modalReducer: Reducer<ModalReducerProps, ModalActions> = 
  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@modal/TOGGLE_MODAL': 
      return { isOpen: action.payload.isOpen };
    ;

    default: break;
  }

  return state;
}

export const store = createStore(modalReducer);

