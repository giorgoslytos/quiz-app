
export const navDirReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      return state + 1
    case 'PREV':
      return state > 0 ? state - 1 : state
    case 'RESTART':
      return 0
    default:
      return state;
  }
} 