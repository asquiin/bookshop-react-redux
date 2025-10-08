const initialState = {
  cart: [],
  isLogged: false,
  books: [],
  loading: false,
  error: null,
  book: null,
  bookLoading: false,
  bookError: null,
};

export default function rootReducer(state = initialState, action) {
  if (action.type === 'GET_REQUEST_START') {
    if (action.meta && action.meta.mode === 'detail') {
      return { ...state, bookLoading: true, bookError: null, book: null };
    }
    return { ...state, loading: true, error: null };
  }

  if (action.type === 'GET_REQUEST_SUCCESS') {
    if (action.meta && action.meta.mode === 'detail') {
      return { ...state, bookLoading: false, book: action.payload };
    }
    return { ...state, loading: false, books: action.payload };
  }

  if (action.type === 'GET_REQUEST_FAILURE') {
    if (action.meta && action.meta.mode === 'detail') {
      return { ...state, bookLoading: false, bookError: action.payload };
    }
    return { ...state, loading: false, error: action.payload };
  }

  if (action.type === 'ADD_TO_CART') {
    return { ...state, cart: [...state.cart, action.payload] };
  }

  if (action.type === 'REMOVE_FROM_CART') {
    return { ...state, cart: state.cart.filter((i) => i.id !== action.payload.id) };
  }

  return state;
}
