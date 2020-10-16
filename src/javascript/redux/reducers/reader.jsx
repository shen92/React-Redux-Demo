export const reader = function(state = {read: 'Type something...'}, action) {
  if (action.type === 'READ') {
    return {
      ...state,
      read: action.payload
    }
  } else {
    return state
  }
}