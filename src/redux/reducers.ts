import { combineReducers } from "redux";
import postsReducer from "./posts/posts.reducer";
import usersReducer from "./users/users.reducer"


const reducers = combineReducers({
    postsState: postsReducer,
    usersState: usersReducer
})

export default reducers

