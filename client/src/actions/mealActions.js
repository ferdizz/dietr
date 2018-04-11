// import axios from 'axios'
import * as types from './actionTypes'
// import { saveData, getData } from '../utils/storage'

export const addMeal = (dispatch, food) => {
    dispatch({
        type: types.ADD_MEAL,
        data: {
            food: food,
            amount: 100,
            saved: false,
            time: Date.now(),
        }
    })
}
