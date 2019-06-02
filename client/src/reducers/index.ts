import { combineReducers } from "redux";
import foods from "./foods";
import meal from "./meal";
import recipes from "./recipes";
import nutrients from "./nutrients";
import userReducer from "../containers/User/userReducer";
import adminReducer, { IAdminState } from "../containers/Admin/adminReducer";

import { IUserState } from "../containers/User";

export interface IApplicationState {
    user: IUserState;
    admin: IAdminState;
}

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    foods,
    meal,
    recipes,
    nutrients
});

export default rootReducer;
