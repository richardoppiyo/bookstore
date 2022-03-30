const STATUS = 'bookStore/categories/STATUS';

const initialState = 'Unknown status';

export default function categReducer(state = initialState, action) {
  switch (action.types) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export function checkStatus() {
  return {
    type: STATUS,
  };
}
