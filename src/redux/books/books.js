import initialState from './initialState';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bz219eFkAAsyRg8dUJ4v/books';

// const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookstore/src/redux/categories/REMOVE_BOOK';

const ADD_BOOK = 'bookstore/ADD_BOOK';
const GET_BOOKS_SUCCESS = 'bookstore/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'bookstore/GET_BOOKS_FAILURE';
const GET_BOOKS_LOADING = 'bookstore/GET_BOOKS_LOADING';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const getBooksSuccess = (books) => ({ type: GET_BOOKS_SUCCESS, payload: books });
export const getBooksFailure = (errMsg) => ({ type: GET_BOOKS_FAILURE, payload: errMsg });
export const getBooksLoading = () => ({ type: GET_BOOKS_LOADING });

export const getBooks = () => (dispatch) => {
  dispatch(getBooksLoading());
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const formattedBooks = [];
      Object.keys(data).forEach((key) => {
        if (key) {
          formattedBooks.push({ ...data[key][0], item_id: key });
        }
      });
      dispatch(getBooksSuccess(formattedBooks));
    })
    .catch((err) => {
      dispatch(getBooksFailure(err.message));
    });
};

export const removeBook = (id) => (dispatch) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      dispatch(getBooks());
    });
};

export const registerNewBook = (newBook) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  })
    .then(() => {
      dispatch(addBook(newBook));
    });
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default books;
