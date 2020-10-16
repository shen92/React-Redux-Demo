export const count = action => ({
  type: action
});

export const read = content => {
  return {
    type: 'READ',
    payload: {
      content
    }
  }
}