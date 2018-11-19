import { createAction } from 'redux-actions';

import * as actions from './actionTypes';

export const userLogin = createAction(actions.USER_LOGIN_REQUEST);
export const userSignup = createAction(actions.USER_SIGNUP_REQUEST);
export const userLogout = createAction(actions.USER_LOGOUT_REQUEST);
