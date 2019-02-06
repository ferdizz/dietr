import { Reducer, Action } from "redux";
import { KnownActions, adminActions } from "./adminActions";
import { getType } from "typesafe-actions";
import { IUserState } from "../User";

export interface IAdminState {
    users: IUserState[];
    loading: boolean;
    error: string;
}

const unloadedState: IAdminState = {
    users: [],
    loading: false,
    error: ""
};

const reducer: Reducer<IAdminState> = (
    state: IAdminState,
    incomingAction: Action
) => {
    const action = incomingAction as KnownActions;

    switch (action.type) {
        case getType(adminActions.getUsers.request):
            return {
                ...state,
                loading: true
            };

        case getType(adminActions.getUsers.failure):
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case getType(adminActions.getUsers.success):
            return {
                ...state,
                loading: false,
                users: [...state.users, ...action.payload]
            };

        default:
            const exhaustiveCheck: never = action;
            if (typeof exhaustiveCheck !== "undefined") break;
    }

    return state || unloadedState;
};

export default reducer;
