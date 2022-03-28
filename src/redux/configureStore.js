import { createStore, combineReducers } from 'redux';
import bookReducers from './books/books';
import categReducers from './categories/categories';

const rootReducer = combineReducers({
  auth: bookReducers,
  count: categReducers,
});

const store = createStore(rootReducer);

export default store;
