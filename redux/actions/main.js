import * as t from '../types';

const setInfo = (name)=>( { type:t.SET_NAME, payload:name })

const incrementCounter = (cartCount)=>{
    cartCount = cartCount+1
    return {type:t.CART_COUNT_INCREMENT,payload:cartCount}
}

const decrementCounter = (counter)=>({type:t.CART_COUNT_INCREMENT,payload:counter})

export {
    setInfo,
    incrementCounter,
    decrementCounter
}