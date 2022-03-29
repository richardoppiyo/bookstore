const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';

const initialState = {
  booksArray: {
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Adichie',
  },
};

export default function bookReducer(state = initialState.booksArray, action) {
  switch (action.types) {
    case ADD:
      return {
        ...state,
        booksArray: [...state.booksArray, action],
      };
    case REMOVE:
      return {
        booksArray: [...state.booksArray.filter((book) => book.item_id !== action.item_id)],
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
