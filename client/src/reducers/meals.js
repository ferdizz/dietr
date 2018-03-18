const initialState = {}

const meals = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEAL':
            return null; //TODO
        default:
            return state;
    }
}

export default meals;