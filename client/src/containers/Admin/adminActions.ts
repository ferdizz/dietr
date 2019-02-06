import { ActionType, createAsyncAction } from "typesafe-actions";
import { IUserState } from "../User";

export type KnownActions = ActionType<typeof adminActions>;

export const adminActions = {
    getUsers: createAsyncAction(
        "ADMIN/GET_USERS_REQUEST",
        "ADMIN/GET_USERS_SUCCESS",
        "ADMIN/GET_USERS_FAILURE"
    )<void, IUserState[], string>()
};
