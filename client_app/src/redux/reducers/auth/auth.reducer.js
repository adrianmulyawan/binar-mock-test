import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from '../../actions/auth.action';

const initialState = {
  loginUserFulfilled: false,
  loginUserRejected: false,
  loginUserLoading: false,
  registerUserFulfilled: false,
  registerUserRejected: false,
  registerUserLoading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginUserFulfilled: action.payload
      }
    case LOGIN_FAILED:
      return {
        ...state,
        loginUserRejected: action.payload
      }
    case LOGIN_LOADING:
      return {
        ...state,
        loginUserLoading: action.payload
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerUserFulfilled: action.payload
      }
    case REGISTER_FAILED:
      return {
        ...state,
        registerUserRejected: action.payload
      }
    case REGISTER_LOADING:
      return {
        ...state,
        registerUserLoading: action.payload
      }
    default:
      return state;
  }
};

export default authReducer;