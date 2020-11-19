// takeEvery - creates non blocking call in order to not stop application to continue running either other sagas or whatever the user wants to do, does not pause the javascript
// call is the code / effect inside of the generator function that invokes the method
// put is the saga effect for creating action
// takeLatest fires only the latest call
import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

//generator function ---> function*
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    ); //call(funtion/method, params to pass in function)

    yield put(fetchCollectionsSuccess(collectionsMap)); //similar to dispatch
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
