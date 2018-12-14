import { createAction } from 'redux-actions';

import * as actions from './actionTypes';

export const addMeal = createAction(actions.ADD_MEAL_REQUEST);
export const addMealSuccess = createAction(actions.ADD_MEAL_SUCCESS);
export const addMealFailure = createAction(actions.ADD_MEAL_FAILURE);
