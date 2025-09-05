import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { loginRequest, loginSuccess, loginFailure } from "../slices/authSlice";

function loginApi(payload) {
  return axios.post("/api/auth/login", payload);
}

function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginSuccess(response.data));
  } catch (err) {
    yield put(loginFailure(err.response?.data?.message || "Login failed"));
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
}