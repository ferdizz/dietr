import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { adminActions } from "./adminActions";
import { handleError } from "src/utils/helper";
import { IUserState } from "../User";
import apiRequest from "src/utils/apiRequest";
import { getUser } from "../User/userSelectors";
import { getType } from "typesafe-actions";

export function* fetchUsers(action: ReturnType<typeof adminActions.getUsers>) {
    try {
        const user = yield select(getUser);
        const url = "http://localhost:3001/users";
        const users: IUserState[] = yield call(
            apiRequest,
            url,
            null,
            user,
            "GET"
        );
        console.log("Users: ", users);
        yield put(adminActions.getUsersSuccess(users));
    } catch (e) {
        handleError(e);
        yield put(adminActions.getUsersFailure("Could not retrieve users"));
    }
}

export default function* root() {
    yield all([takeLatest(getType(adminActions.getUsers), fetchUsers)]);
}
