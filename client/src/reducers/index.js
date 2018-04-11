import { combineReducers } from 'redux'
import user from './user'
import foods from './foods'
import meal from './meal'
import recipes from './recipes'
import nutrients from './nutrients'

const combinedReducer = combineReducers({
  user,
  foods,
  meal,
  recipes,
  nutrients
})

export default combinedReducer