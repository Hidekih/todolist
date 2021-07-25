import { Dispatch } from 'redux';
import { load as loadName } from '../../storage/user';

export function setName(name: string) {
  return {
    type: '@user/SET_NAME',
    payload: {
      name
    }
  }
}

export function fetchName() {
  return (dispath: Dispatch) => {
    return loadName().then(res => {
      if (res) {
        dispath(setName(res));
        return res;
      }
    });
  }
}