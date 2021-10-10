export const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case '@filter/ALL': {
      return state.replace(state, action.payload);
    }
    case '@filter/IMPORTANT': {
      return state.replace(state, action.payload);
    }
    case '@filter/NOT_IMPORTANT': {
      return state.replace(state, action.payload);
    }
    default:
      return state;
  }
};

export const filter = (filter) => ({
  type: '@filter/' + filter,
  payload: filter,
});
