import { all, fork } from "redux-saga/effects";
import userSaga from "../containers/User/userSaga";
import adminSaga from "../containers/Admin/adminSaga";

export default function* rootSaga() {
    yield all([fork(userSaga), fork(adminSaga)]);
}
