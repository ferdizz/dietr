import { createAction, ActionType } from 'typesafe-actions';

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
    userLogin: createAction(
        'USER/LOGIN_REQUEST',
        resolve => (username: string) => resolve(username)
    ),
    userLoginSuccess: createAction(
        'USER/LOGIN_SUCCESS',
        resolve => (userdata: UserResponse) => resolve(userdata)
    ),
    userLoginFailure: createAction(
        'USER/LOGIN_FAILURE',
        resolve => (error: string) => resolve(error)
    ),
    userSignup: createAction(
        'USER/SIGNUP_REQUEST',
        resolve => (userdata: SignupData) => resolve(userdata)
    ),
    userSignupSuccess: createAction(
        'USER/SIGNUP_SUCCESS',
        resolve => (userdata: UserResponse) => resolve(userdata)
    ),
    userSignupFailure: createAction(
        'USER/SIGNUP_FAILURE',
        resolve => (error: string) => resolve(error)
    ),
    userLogout: createAction('USER/LOGOUT_REQUEST'),
    userLogoutSuccess: createAction('USER/LOGOUT_SUCCESS'),
    userLogoutFailure: createAction(
        'USER/LOGOUT_FAILURE',
        resolve => (error: string) => resolve(error)
    )
};
