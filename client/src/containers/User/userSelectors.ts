import { IApplicationState } from 'src/reducers';

export const getUser = (state: IApplicationState) => {
    return state.user;
};
