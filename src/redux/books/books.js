const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';

const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
}

export function add(book) {
  return {
    type: ADD,
    book,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}
