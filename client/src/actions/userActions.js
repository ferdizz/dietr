import axios from 'axios';
import * as types from './actionTypes';
import { saveData } from '../utils/storage';

const URL = 'http://localhost:3001/users';

export const login = (dispatch, userdata) => {
    axios
        .post(URL + '/login', userdata)
        .then(response => {
            if (response.data.token) {
                setUser(dispatch, userdata, response);
            }
        })
        .catch(error => {
            console.log(error.response);
            setStatus(dispatch, { status: error.response.data.message });
        });
};

export const setUser = (dispatch, userdata, response) => {
    saveData('user', userdata);
    saveData('token', response.data.token);
    setStatus(dispatch, { status: response.data.message });

    dispatch({
        type: types.LOG_IN,
        data: userdata
    });
};

export const createUser = (dispatch, userdata) => {
    axios
        .post('http://localhost:3001/users/signup', userdata)
        .then(response => {
            if (response.data.token) {
                setUser(dispatch, userdata, response);
            }
        })
        .catch(error => {
            console.log(error.response);
            setStatus(dispatch, { status: error.response.data.message });
        });
};

export const setStatus = (dispatch, status) => {
    dispatch({
        type: types.SET_STATUS,
        data: status
    });
};

export const logout = dispatch => {
    localStorage.clear();
    dispatch({
        type: types.LOG_OUT
    });
};
