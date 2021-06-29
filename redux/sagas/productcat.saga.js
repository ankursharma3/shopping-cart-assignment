import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_PRODUCTS_CATEGORY } from "../types";
import productsService from "../../services/product.service";
import {setProductsCats} from "../actions/main";

function* fetchProductsCat() {
  try {
    const products = yield call( productsService.getProductsCategory);
    console.log("cats","hi i am called")
    yield put(setProductsCats(products));
  } catch (e) {}
}

 
export function* waitForFetchProductsCat() {
  yield takeEvery(FETCH_PRODUCTS_CATEGORY, fetchProductsCat);
}