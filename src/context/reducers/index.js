import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import ProjectReducers from "./ProjectReducers";
import searchReducer from "./searchReducer";

const myReducer = combineReducers({
    user: userAuthReducer,
    projects: ProjectReducers,
    searchTerm:searchReducer
})

export default myReducer;