const initialState = {}

const foods = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return null; //TODO
        default:
            return state;
    }
}

export default foods;