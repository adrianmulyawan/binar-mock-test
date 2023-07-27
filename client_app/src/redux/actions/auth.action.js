export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const REGISTER_LOADING = "REGISTER_LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const loginLoading = (data) => {
  return {
    type: LOGIN_LOADING,
    payload: data
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  };
};

export const loginFailed = (data) => {
  return {
    type: LOGIN_FAILED,
    payload: data
  };
};

export const registerLoading = (data) => {
  return {
    type: REGISTER_LOADING,
    payload: data
  };
};

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  };
};

export const registerFailed = (data) => {
  return {
    type: REGISTER_FAILED,
    payload: data
  };
};