import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { userActions as actions, UserResponse } from "./userActions";
import { handleError } from "../../utils/helper";
import { getType } from "typesafe-actions";
import apiRequest from "src/utils/apiRequest";
import { getUser } from "./userSelectors";

const baseUrl = "http://localhost:3001/users";

export function* handleLogin(action: ReturnType<typeof actions.login.request>) {
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
            yield put(actions.login.success(userdata));
        }
    } catch (e) {
        handleError(e);
        yield put(actions.login.failure("Login failed"));
    }
}

export function* handleSignup(
    action: ReturnType<typeof actions.signup.request>
) {
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
            yield put(actions.signup.success(userdata));
        }
    } catch (e) {
        handleError(e);
        yield put(actions.signup.failure("Signup failed"));
    }
}

export function* handleLogout() {
    try {
        yield put(actions.logout.success());
    } catch (e) {
        handleError(e);
        yield put(actions.logout.failure("Logout failed"));
    }
}

export default function* root() {
    yield all([
        takeLatest(getType(actions.login.request), handleLogin),
        takeLatest(getType(actions.signup.request), handleSignup),
        takeLatest(getType(actions.logout.request), handleLogout)
    ]);
}
