export const PROFILE_LOADING = "PROFILE_LOADING";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILED = "PROFILE_FAILED";

export const profileLoading = (data) => {
  return {
    type: PROFILE_LOADING,
    payload: data
  };
};

export const profileSuccess = (data) => {
  return {
    type: PROFILE_SUCCESS,
    payload: data
  };
};

export const profileFailed = (data) => {
  return {
    type: PROFILE_FAILED,
    payload: data
  };
};