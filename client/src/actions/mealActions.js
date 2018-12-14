import { createAction } from 'redux-actions';

import * as actions from './actionTypes';

export const addMeal = createAction(actions.ADD_MEAL_REQUEST);
