import axios from 'axios';

const URL = 'http://localhost:3001/users';

export const login = payload => {
    return axios.post(URL + '/login', payload);
};

export const signup = payload => {
    return axios.post(URL + '/signup', payload);
};
