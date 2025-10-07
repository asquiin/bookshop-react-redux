import axios from 'axios';

export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item,
    };
};


export const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item,
    };
};

export const fetchBooks = (queryOrOpts, maxResultsArg) => async (dispatch) => {
  dispatch({ type: 'FETCH_BOOKS_REQUEST' });

  // Backward-compatible разбор аргументов
  const opts = typeof queryOrOpts === 'string'
    ? { q: queryOrOpts, maxResults: maxResultsArg }
    : (queryOrOpts || {});

  const {
    q = '',
    maxResults = 30,
    orderBy = 'relevance',
  } = opts;

  try {
    const res = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: { q, maxResults, orderBy,
        key: 'AIzaSyBSdsuDMR2_8Rj8oSkDhvYfilF5gPz4e5A' },
    });

    dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: res.data.items || [] });
  } catch (error) {
    dispatch({ type: 'FETCH_BOOKS_FAILURE', payload: error.message });
  }
};


