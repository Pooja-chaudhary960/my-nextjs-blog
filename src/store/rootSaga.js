import { all, fork } from "redux-saga/effects";
import watchAuthSaga from "./sagas/authSaga";
import watchPostsSaga from "./sagas/postsSaga";

export default function* rootSaga() {
  yield all([fork(watchAuthSaga), fork(watchPostsSaga)]);
}