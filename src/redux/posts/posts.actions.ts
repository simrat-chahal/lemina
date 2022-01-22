import {postTypes} from "../types"
import postsInterface from "../../interfaces/postsDataInterface"

export const setPostsData = (data:Array<postsInterface>)=>({
    type: postTypes.SET_POST_DATA,
    payload: data
})

export const saveSinglePost = (data:postsInterface)=>({
    type: postTypes.SAVE_SINGLE_POST,
    payload: data
})

export const showPost = (data:boolean)=>({
    type: postTypes.SHOW_POST_DATA,
    payload: data
})

export const saveError = (data:string)=>({
    type: "saveError",
    payload: data
})