const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        id: state.length,
        title: action.payload.title,
        author: action.payload.author,
      }];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
