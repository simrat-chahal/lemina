import {userTypes} from "../types"
import usersDataInterface from "../../interfaces/usersDataInterface"

export const setUsersData = (data:usersDataInterface)=>({
    type:userTypes.SET_USERS_DATA,
    payload:data
})