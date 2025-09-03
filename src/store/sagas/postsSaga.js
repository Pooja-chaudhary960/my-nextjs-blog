import { takeLatest, call, put } from "redux-saga/effects";
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from "../slices/postsSlice";
import { getPosts } from "../../services/postService";

function* handleFetchPosts() {
  try {
    const posts = yield call(getPosts);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export default function* watchPostsSaga() {
  yield takeLatest(fetchPosts.type, handleFetchPosts);
}
