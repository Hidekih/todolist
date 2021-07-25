export function setInitialRoute(text: string) {
  return {
    type: '@navigation/SET_INITIAL_ROUTE',
    payload: {
      userName: text,
    }
  }
}