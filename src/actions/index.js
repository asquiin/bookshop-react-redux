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

export const getRequest = (config) => async (dispatch) => {
  if (!config || !config.url) {
    throw new Error('getRequest: "url" обязателен');
  }

  const method = config.method || 'GET';
  const params = config.params || undefined;
  const data = config.data || undefined;
  const headers = config.headers || undefined;

  const startType = config.startType || 'GET_REQUEST_START';
  const successType = config.successType || 'GET_REQUEST_SUCCESS';
  const failureType = config.failureType || 'GET_REQUEST_FAILURE';

  const meta = config.meta;

  dispatch({ type: startType, meta });

  try {
    const response = await axios({
      url: config.url,
      method,
      params,
      data,
      headers,
    });

    let payload = response.data;
    if (typeof config.onSuccess === 'function') {
      payload = config.onSuccess(response);
    }

    dispatch({ type: successType, payload, meta });
  } catch (err) {
    let errorPayload = err.message;
    if (typeof config.onError === 'function') {
      errorPayload = config.onError(err);
    }
    dispatch({ type: failureType, payload: errorPayload, error: true, meta });
  }
};


