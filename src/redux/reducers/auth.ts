import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  RESEND_ACTIVATION_SUCCESS,
  RESEND_ACTIVATION_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  LOGOUT,
} from '../actions/auth/types';

type AuthState = {
  user: null | object;
  access: null | string;
  isAuthenticated: boolean;
  loading: boolean;
};

type AuthAction = {
  type: string;
  payload?: any;
};

const initialState: AuthState = {
  user: null,
  access: null,
  isAuthenticated: false,
  loading: false,
};

// eslint-disable-next-line
const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default authReducer;
