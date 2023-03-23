
const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    //Notes:
    // 1. sync functions
    // 2. We should not mutate the original state
    switch (action.type) {
        case 'INC':
            return {
                counter: state.counter + 1
            };
        case 'DEC':
            return {
                counter: state.counter - 1
            };
            case 'ADD':
            return {
                counter: state.counter + action.payload.val,
            };
        default:
            return state;
    }
}

export default reducer;