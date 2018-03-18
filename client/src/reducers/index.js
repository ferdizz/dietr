import { combineReducers } from 'redux'
import users from './users'
import intake from './intake'
import foods from './foods'
import meals from './meals'
import recipes from './recipes'
import nutrients from './nutrients'

const combinedReducer = combineReducers({
  users,
  intake,
  foods,
  meals,
  recipes,
  nutrients
})

export default combinedReducer