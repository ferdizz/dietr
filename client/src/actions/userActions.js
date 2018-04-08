import axios from 'axios'
import * as types from './actionTypes'

export const login = (dispatch, userdata) => {

    axios.post('http://localhost:3001/users/login', userdata)
        .then(response => {
            console.log('Response from server:')
            console.log(response)
        }).catch(error => {
            console.log(error)
        })

    // dispatch({
    //     type: types.LOG_IN,
    //     data: userdata
    // })
}

export const createUser = (dispatch, userdata) => {
    dispatch({
        type: types.LOG_IN,
        data: userdata
    })
}

export const logout = (dispatch) => {
    dispatch({
        type: types.LOG_OUT
    })
}