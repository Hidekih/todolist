import { load as loadName } from '../../storage/user';

export function setName(name: string) {
  return {
    type: 'SET_NAME',
    payload: {
      name
    }
  }
}

export function fetchName() {
  return (dispath) => {
    return loadName().then(res => {
      if (res) {
        dispath(setName(res));
        return res;
      }
    });
  }
}