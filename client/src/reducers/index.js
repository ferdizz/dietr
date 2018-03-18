import { combineReducers } from 'redux'
import user from './user'
import foods from './foods'
import meals from './meals'
import recipes from './recipes'
import nutrients from './nutrients'

const combinedReducer = combineReducers({
  user,
  foods,
  meals,
  recipes,
  nutrients
})

export default combinedReducer