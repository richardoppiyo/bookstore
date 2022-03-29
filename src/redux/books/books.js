const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';

const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.types) {
    case ADD:
      console.log('hello foom Add');
      return [...state, action.book];
    case REMOVE:
      return [...state.filter((book) => book.item_id !== action.item_id)];
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
