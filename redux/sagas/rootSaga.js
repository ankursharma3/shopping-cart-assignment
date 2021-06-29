import { all } from "redux-saga/effects";
import { waitForFetchProductsCat } from "./productcat.saga";

export default function* rootSaga() {
  yield all([waitForFetchProductsCat()]);
}