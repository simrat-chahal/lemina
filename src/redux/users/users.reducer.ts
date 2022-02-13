import {userTypes} from "../types"

const initialState = {
    users:[],
    singleUser:{},
    error:""
}

const usersReducer = (state=initialState,action:any) => {
    const {type,payload} = action
    switch (type) {
        case userTypes.SET_USERS_DATA:
            return {...state, users: payload}
    
        default:
            return state;
    }
    
}

export default usersReducer