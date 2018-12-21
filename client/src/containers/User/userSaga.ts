import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { userActions as actions, UserResponse } from "./userActions";
import { handleError } from "../../utils/helper";
import { getType } from "typesafe-actions";
import apiRequest from "src/utils/apiRequest";
import { getUser } from "./userSelectors";

const baseUrl = "http://localhost:3001/users";

export function* handleLogin(action: ReturnType<typeof actions.userLogin>) {
    try {
        const user = yield select(getUser);
        const url = `${baseUrl}/login`;
        const userdata: UserResponse = yield call(
            apiRequest,
            url,
            action.payload,
            user,
            "POST"
        );

        if (userdata.token) {
            yield put(actions.userLoginSuccess(userdata));
        }
    } catch (e) {
        handleError(e);
        yield put(actions.userLoginFailure("Login failed"));
    }
}

export function* handleSignup(action: ReturnType<typeof actions.userSignup>) {
    try {
        const user = yield select(getUser);
        const url = `${baseUrl}/signup`;
        const userdata: UserResponse = yield call(
            apiRequest,
            url,
            action.payload,
            user,
            "POST"
        );

        if (userdata.token) {
            yield put(actions.userSignupSuccess(userdata));
        }
    } catch (e) {
        handleError(e);
        yield put(actions.userSignupFailure("Signup failed"));
    }
}

export function* handleLogout() {
    try {
        yield put(actions.userLogoutSuccess());
    } catch (e) {
        handleError(e);
        yield put(actions.userLogoutFailure("Logout failed"));
    }
}

export default function* root() {
    yield all([
        takeLatest(getType(actions.userLogin), handleLogin),
        takeLatest(getType(actions.userSignup), handleSignup),
        takeLatest(getType(actions.userLogout), handleLogout)
    ]);
}
