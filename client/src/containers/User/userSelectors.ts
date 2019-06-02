import { IApplicationState } from '../../reducers';

export const getUser = (state: IApplicationState) => {
    return state.user;
};
