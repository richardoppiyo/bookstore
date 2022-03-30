import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducers from './books/books';
import categReducers from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducers,
  categ: categReducers,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
