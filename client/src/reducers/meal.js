const initialState = {}

const meal = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEAL':
            return Object.assign({}, state, action.data)
        default:
            return state;
    }
}

export default meal;