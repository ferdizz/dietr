import axios from 'axios'
import * as types from './actionTypes'
import { saveData } from '../utils/storage'

export const login = (dispatch, userdata) => {

    axios.post('http://localhost:3001/users/login', userdata)
        .then(response => {
            if (response.status === 200 && response.data.token) {
                saveData('token', response.data.token)
                saveData('user', userdata)
                setUser(dispatch, userdata)
                setStatus(dispatch, { status: response.data.message })
            }
        })

        .catch((error, response) => {
            console.log(error.response)
            setStatus(dispatch, { status: error.response.data.message })
        })
}

export const setUser = (dispatch, userdata) => {
    dispatch({
        type: types.LOG_IN,
        data: userdata
    })
}

export const createUser = (dispatch, userdata) => {
    dispatch({
        type: types.LOG_IN,
        data: userdata
    })
}

export const setStatus = (dispatch, status) => {
    dispatch({
        type: types.SET_STATUS,
        data: status
    })
}

export const logout = (dispatch) => {
    localStorage.clear();
    dispatch({
        type: types.LOG_OUT
    })
}