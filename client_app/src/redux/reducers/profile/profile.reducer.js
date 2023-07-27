import {
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  PROFILE_FAILED
} from '../../actions/profile.action'

const initialState = {
  profileUserLoading: false,
  profileUserFulfilled: false,
  profileUserRejected: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        profileUserLoading: action.payload
      }
    case PROFILE_SUCCESS:
      return {
        ...state,
        profileUserFulfilled: action.payload
      }
    case PROFILE_FAILED:
      return {
        ...state,
        profileUserRejected: action.payload
      }
    default:
      return state;
  }
};

export default profileReducer;