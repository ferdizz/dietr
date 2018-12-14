import { createAction } from 'redux-actions';

import * as actions from './actionTypes';

export const userLogin = createAction(actions.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(actions.USER_LOGIN_SUCCESS);
export const userLoginFailure = createAction(actions.USER_LOGIN_FAILURE);

export const userSignup = createAction(actions.USER_SIGNUP_REQUEST);
export const userSignupSuccess = createAction(actions.USER_SIGNUP_SUCCESS);
export const userSignupFailure = createAction(actions.USER_SIGNUP_FAILURE);

export const userLogout = createAction(actions.USER_LOGOUT_REQUEST);
export const userLogoutSuccess = createAction(actions.USER_LOGOUT_SUCCESS);
export const userLogoutFailure = createAction(actions.USER_LOGOUT_FAILURE);
