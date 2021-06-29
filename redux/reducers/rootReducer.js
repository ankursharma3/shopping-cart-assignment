import {combineReducers} from  'redux';
import main from "./main"
import productsReducer from './products';
const rootReducer = combineReducers({
    main: main,
    productCategories:productsReducer
})

export default rootReducer;