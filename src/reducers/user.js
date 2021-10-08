const initialState = {
  data: null,
  isLogging: false,
  loginSuccess: true
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLogging: true,
        loginSuccess: true,
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLogging: false,
        loginSuccess: true,
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLogging: false,
        loginSuccess: false,
      }
    default:
      return state;
  }
}

export default reducer;