import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_START,
  USER_LOGIN_START_ERROR,
  USER_LOGIN_START,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  USER_UPDATE_PROFILE_FAILED,
  USER_UPDATE_PROFILE_START,
  USER_UPDATE_PROFILE_SUCCESS,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILED,
  ADD_REVIEW_RESET,
} from "./ConstTypeAction";
export const userReducer = (
  initialState = {
    success: false,
    isLoading: false,
    error: "",
    user: {
      _id: "",
      name: "",
      email: "",
      token: "",
    },
    userProfile: {
      user: {},
    },
    addingReview: {
      success: false,
      isLoading: false,
      error: "",
    },
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_LOGIN_START_ERROR:
      return {
        ...initialState,
        error: "",
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_LOGIN_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...initialState,
        user: {
          _id: "",
          name: "",
          email: "",
          token: "",
        },
      };
    case USER_SIGNUP_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_SIGNUP_SUCCESS:
      return {
        ...initialState,
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_SIGNUP_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };
    case GET_PROFILE_START:
      return {
        ...initialState,
        userProfile: {
          isLoading: true,
        },
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...initialState,
        userProfile: {
          user: action.payload,
          isLoading: false,
          success: true,
        },
      };

    case GET_PROFILE_FAILED:
      return {
        ...initialState,
        error: action.payload,
        userProfile: {
          error: action.payload,
          isLoading: false,
        },
      };
    case USER_UPDATE_PROFILE_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...initialState,
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_UPDATE_PROFILE_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };
      case ADD_REVIEW_START:
        return {
          ...initialState,
          addingReview: {
            isLoading: true,
          },
        };
  
      case ADD_REVIEW_SUCCESS:
        return {
          ...initialState,
          addingReview: {
            isLoading: false,
            success: action.payload,
          },
        };
  
      case ADD_REVIEW_FAILED:
        return {
          ...initialState,
          addingReview: {
            error: action.payload,
            isLoading: false,
          },
        };
  
      case ADD_REVIEW_RESET:
        return {
          ...initialState,
          addingReview: {
            error: "",
            success: "",
            isLoading: false,
          },
        };
    default:
      return initialState;
  }
};
