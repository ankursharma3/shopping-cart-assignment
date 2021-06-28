import * from "../types";

export const setInfo = (name)=>({
    types:t.SET_NAME,
    payload:name
})