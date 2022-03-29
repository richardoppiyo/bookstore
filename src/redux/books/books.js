const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';

const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.types) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((book) => book.item_id !== action.item_id)];
    default:
      return state;
  }
}

export function add(payload) {
  return {
    type: ADD,
    payload,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}
