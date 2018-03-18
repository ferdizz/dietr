const initialState = {}

const recipes = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return null; //TODO
        default:
            return state;
    }
}

export default recipes;