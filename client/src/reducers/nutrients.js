const initialState = {}

const nutrients = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NUTRIENT':
            return null; //TODO
        default:
            return state;
    }
}

export default nutrients;