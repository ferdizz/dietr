import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions/actionTypes';
import * as API from '../api/userAPI';

/**
 * Login
 */
export function* login({ payload }) {
    try {
        const response = yield call(API.login, payload);
        if (response.data.token) {
            yield put({
                type: actions.USER_LOGIN_SUCCESS,
                payload: response.data
            });
        }
    } catch (e) {
        console.log(e);
        yield put({
            type: actions.USER_LOGIN_FAILURE,
            payload: { error: 'Login failed' }
        });
    }
}

/**
 * Signup
 */
export function* signup({ payload }) {
    try {
        const response = yield call(API.signup, payload);
        if (response.data.token) {
            yield put({
                type: actions.USER_SIGNUP_SUCCESS,
                payload: response.data
            });
        }
    } catch (e) {
        console.log(e);
        yield put({
            type: actions.USER_SIGNUP_FAILURE,
            payload: { error: 'Signup failed' }
        });
    }
}

/**
 * Logout
 */
export function* logout() {
    try {
        yield put({
            type: actions.USER_LOGOUT_SUCCESS
        });
    } catch (e) {
        yield put({
            type: actions.USER_LOGOUT_FAILURE,
            payload: { error: 'Logout failed' }
        });
    }
}

export default function* root() {
    yield all([
        takeLatest(actions.USER_LOGIN_REQUEST, login),
        takeLatest(actions.USER_SIGNUP_REQUEST, signup),
        takeLatest(actions.USER_LOGOUT_REQUEST, logout)
    ]);
}
