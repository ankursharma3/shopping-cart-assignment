import * as t from "../types";

const main = (state = {
    name:"Guest",
    cartCount:0
},action)=>{
    console.log("action is",action)
    switch(action.type){
        case t.SET_NAME:
            return {...state, name:action.payload }     
        case t.CART_COUNT_INCREMENT:
            console.log("Case",action)
            return { ...state, cartCount:action.payload  }
        case t.CART_COUNT_DECREMENT:
            return { ...state, cartCount:action.payload  }    
        default:
            console.log("i am in default case")
            return state;
    }
}

export default main;