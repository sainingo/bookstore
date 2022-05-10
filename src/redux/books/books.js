<<<<<<< HEAD
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: { id } });

const books = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: state.length,
        title: action.payload.title,
        author: action.payload.author,
=======
import initialData from './initialData';

const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/categories/REMOVE_BOOK';

export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: { id } });
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

const books = (state = initialData, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: Math.floor((Math.random() * 100) + 1),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
>>>>>>> react-redux-usage
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default books;
