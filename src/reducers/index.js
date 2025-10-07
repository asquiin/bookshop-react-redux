const initialState = {
  cart: [],
  isLogged: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "FETCH_BOOKS_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_BOOKS_SUCCESS":
      return { ...state, loading: false, books: action.payload };

    case "FETCH_BOOKS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
