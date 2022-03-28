const ADD = 'ADD';
const REMOVE = 'REMOVE';

const initialState = {
  booksArray: [],
};

export default function bookReducer(state = initialState, action) {
  switch (action.types) {
    case ADD:
      return {
        ...state,
        booksArray: [...state.booksArray, action],
      };
    case REMOVE:
      return {
        ...state,
        booksArray: [...state.booksArray, action],

      };
    default:
      return state;
  }
}

export function add() {
  return {
    type: ADD,
  };
}

export function remove() {
  return {
    type: REMOVE,
  };
}
