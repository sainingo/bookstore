import { combineReducers, createStore } from 'redux';
import books from './books/books';
import categories from './categories/categories';

const root = combineReducers({ books, categories });

const store = createStore(
  root,
  {},
);

export default store;
