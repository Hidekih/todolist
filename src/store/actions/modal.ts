export function toggleModal(state: boolean) {
  return {
    type: '@modal/TOGGLE_MODAL',
    payload: {
      isOpen: !state,
    }
  }
}
