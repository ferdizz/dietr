import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions/userActions';
import { handleError } from '../utils/helper';
import * as API from '../api/userAPI';

export function* handleLogin({ payload }) {
    try {
        const response = yield call(API.login, payload);
        if (response.data.token) {
            yield put(actions.userLoginSuccess(response.data));
        }
    } catch (e) {
        handleError(e);
        yield put(actions.userLoginFailure('Login failed'));
    }
}

export function* handleSignup({ payload }) {
    try {
        const response = yield call(API.signup, payload);
        if (response.data.token) {
            yield put(actions.userSignupSuccess(response.data));
        }
    } catch (e) {
        handleError(e);
        yield put(actions.userSignupFailure('Signup failed'));
    }
}

export function* handleLogout() {
    try {
        yield put(actions.userLogoutSuccess());
    } catch (e) {
        handleError(e);
        yield put(actions.userLogoutFailure('Logout failed'));
    }
}

export default function* root() {
    yield all([
        takeLatest(actions.userLogin, handleLogin),
        takeLatest(actions.userSignup, handleSignup),
        takeLatest(actions.userLogout, handleLogout)
    ]);
}
