import { all, fork } from 'redux-saga/effects';

import userSaga from './userSaga';
// import mealSaga from './mealSaga';

/**
 * rootSaga
 */
export default function* rootSaga() {
    yield all([
        fork(userSaga)
        // fork(mealSaga)
    ]);
}
