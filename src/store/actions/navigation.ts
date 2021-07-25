export function setInitialRoute(text: string) {
  return {
    type: 'SET_INITIAL_ROUTE',
    payload: {
      userName: text,
    }
  }
}