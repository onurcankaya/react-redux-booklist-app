const INITIAL_STATE = null

export const activeBookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_BOOK': {
      return action.payload
    }
    default:
      return state
  }
}
