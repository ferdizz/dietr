import { createAction, ActionType } from "typesafe-actions";
import { IUserState } from "../User";

export type KnownActions = ActionType<typeof adminActions>;

export const adminActions = {
    getUsers: createAction("ADMIN/GET_USERS_REQUEST"),
    getUsersSuccess: createAction(
        "ADMIN/GET_USERS_SUCCESS",
        resolve => (users: IUserState[]) => resolve(users)
    ),
    getUsersFailure: createAction(
        "ADMIN/GET_USERS_FAILURE",
        resolve => (error: string) => resolve(error)
    )
};
