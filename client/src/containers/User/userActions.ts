import { createAsyncAction, ActionType } from "typesafe-actions";

export type KnownActions = ActionType<typeof userActions>;

export type UserResponse = {
    _id: string;
    token: string;
    username: string;
    height: number;
    weight: number;
};

export type SignupData = {
    username: string;
    height: number;
    weight: number;
};

export const userActions = {
    login: createAsyncAction(
        "USER/LOGIN_REQUEST",
        "USER/LOGIN_SUCCESS",
        "USER/LOGIN_FAILURE"
    )<string, UserResponse, string>(),

    signup: createAsyncAction(
        "USER/SIGNUP_REQUEST",
        "USER/SIGNUP_SUCCESS",
        "USER/SIGNUP_FAILURE"
    )<SignupData, UserResponse, string>(),

    logout: createAsyncAction(
        "USER/LOGOUT_REQUEST",
        "USER/LOGOUT_SUCCESS",
        "USER/LOGOUT_FAILURE"
    )<void, void, string>()
};
