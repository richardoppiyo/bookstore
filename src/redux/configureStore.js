import { createStore, combineReducers } from 'redux';
import bookReducers from './books/books';
import categReducers from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducers,
  categ: categReducers,
});

const store = createStore(rootReducer);

export default store;
