const STATUS = 'bookStore/categories/STATUS';

const initialState = {
  categories: [],
};

export default function categReducer(state = initialState, action) {
  switch (action.types) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export function status() {
  return {
    type: STATUS,
  };
}
