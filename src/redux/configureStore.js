import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

const root = combineReducers({ books, categories });

const store = createStore(
  root,
  applyMiddleware(thunk),
);

export default store;
