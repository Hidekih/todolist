import { ActionCreator, Action } from 'redux';
import { ModalActionTypes } from '../reducers/modal';

type ModalActionCreatorTypes = {
  type: ModalActionTypes;
}

export function toggleModal(state: boolean) {
  return {
    type: '@modal/TOGGLE_MODAL',
    payload: {
      isOpen: !state,
    }
  }
}
