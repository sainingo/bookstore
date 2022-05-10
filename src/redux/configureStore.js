import { combineReducers } from 'redux';
import bookReducer from './reducers/booksReducer';
import categoryReducer from './reducers/categoriesReducer';

const root = combineReducers({ bookReducer, categoryReducer });

export default root;
