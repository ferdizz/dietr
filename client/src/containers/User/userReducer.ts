import { Reducer, Action } from "redux";
import { KnownActions, userActions } from "./userActions";
import { getType } from "typesafe-actions";

export interface IUserState {
    id: string;
    token: string;
    username: string;
    height: number;
    weight: number;
    loading: boolean;
    error: string;
}

const unloadedState: IUserState = {
    id: "",
    token: "",
    username: "",
    height: 0,
    weight: 0,
    loading: false,
    error: ""
};

const reducer: Reducer<IUserState> = (
    state: IUserState,
    incomingAction: Action
) => {
    const action = incomingAction as KnownActions;

    switch (action.type) {
        case getType(userActions.login.request):
        case getType(userActions.logout.request):
        case getType(userActions.signup.request):
            return {
                ...state,
                loading: true
            };

        case getType(userActions.login.failure):
        case getType(userActions.logout.failure):
        case getType(userActions.signup.failure):
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case getType(userActions.login.success):
        case getType(userActions.signup.success):
            // return {
            //     ...state,
            //     loading: false,
            //     id: action.payload._id,
            //     token: action.payload.token,
            //     username: action.payload.username
            // };
            return {
                ...state,
                ...action.payload,
                loading: false
            };

        case getType(userActions.logout.success):
            return unloadedState;

        default:
            const exhaustiveCheck: never = action;
            if (typeof exhaustiveCheck !== "undefined") break;
    }

    return state || unloadedState;
};

export default reducer;
