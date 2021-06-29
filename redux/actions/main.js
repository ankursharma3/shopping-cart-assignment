import * as t from '../types';

const setInfo = (name)=>( { type:t.SET_NAME, payload:name })

const incrementCounter = (cartCount)=>{ cartCount = cartCount+1; return {type:t.CART_COUNT_INCREMENT,payload:cartCount} }

const decrementCounter = (counter)=>({type:t.CART_COUNT_INCREMENT,payload:counter})

const fetchProductsCat = () => ({ type:t.FETCH_PRODUCTS_CATEGORY })

const setProductsCat = (productCategories = null) => {
    console.log("cats","hi i am called")
    if(productCategories) {
        return {
            type: t.SET_PRODUCTS_CATEGORY,
            payload:productCategories
        }
    } 
}

export {
    setInfo,
    incrementCounter,
    decrementCounter,
    fetchProductsCat,
    setProductsCat
}