import * as t from "../types";

const main = (state = {
    userInfo{
        name:"Guest"
    },
},action)=>{
    switch(action.type){

        const t.SET_NAME:
            return {...state,userInfo:{
                name:action.payload
            }}; 

        default:
            return state;
    }
}

export default main;