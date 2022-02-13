import { combineReducers } from "redux";
import counterReducer  from "./counter/counter.reducer";
import postsReducer from "./posts/posts.reducer";
import usersReducer from "./users/users.reducer"


const reducers = combineReducers({
    postsState: postsReducer,
    usersState: usersReducer,
    counter: counterReducer
})

export default reducers