import {postTypes} from "../types"
const {SET_POST_DATA, GET_SINGLE_POST, SAVE_SINGLE_POST, SHOW_POST_DATA} = postTypes
// import postsInterface from "../../interfaces/postsDataInterface"

const initialState = {
    posts:[],
    singlePost:{},
    showPost: false,
    error:"this is error"
}

const postsReducer = (state=initialState,action:any) => {
    const {type,payload} = action
    switch (type) {
        case SET_POST_DATA:
            return {...state, posts:payload}

        case GET_SINGLE_POST:
             return {}

        case SAVE_SINGLE_POST:
            return {...state, singlePost: payload}

        case SHOW_POST_DATA:
            return {...state, showPost: payload}

        case "saveError":
            return {...state, error: payload};
    
        default:
            return state;
    }
    
}

export default postsReducer