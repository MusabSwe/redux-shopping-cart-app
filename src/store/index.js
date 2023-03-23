import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlise = createSlice({
    name: 'counter',
    // ==> should be the name same 
    // as state.counter in the app.js
    
    initialState: { counter: 0 },
    reducers: {
        // receive the dispatched action from react components
        // such as dispatch({type: increment, payload: {}})
        // reducer file that receive dispatch action.type
        // below the function that manipulate states
        // below the event listeners
        incremenet(state, action) {
            state.counter++;
        },
        decremenet(state, action) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        },
    },
});

export const actions = counterSlise.actions;

const store = configureStore({
    reducer: counterSlise.reducer
})

export default store;