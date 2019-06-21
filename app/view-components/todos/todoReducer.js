export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return null;
    }
    case 'TOGGLE_COMPLETE': {
      return null;
    }
    case 'DELETE_TODO': {
      return null;
    }
    case 'CLEAR_TODOS': {
      return null;
    }
    default: {
      return state;
    };
  }
}