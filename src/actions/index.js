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

export const fetchBooks = (query) => async (dispatch) => {
  dispatch({ type: "FETCH_BOOKS_REQUEST" });

  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes`,
      {
        params: {
          maxResults: 5,
          orderBy: "relevance",
          q: query,
          key: "AIzaSyBSdsuDMR2_8Rj8oSkDhvYfilF5gPz4e5A", // ключ не меняется
        },
      }
    );

    dispatch({
      type: "FETCH_BOOKS_SUCCESS",
      payload: res.data.items || [],
    });
  } catch (error) {
    dispatch({
      type: "FETCH_BOOKS_FAILURE",
      payload: error.message,
    });
  }
};


