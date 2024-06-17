import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
}

const QuoteHistorySlice = createSlice({
    name: 'quoteHistory',
    initialState,
    reducers: {
        appendQuote(state, action) {
            if (state.items.length >= 10) {
                state.items.shift();
            }

            state.items.push(action.payload);
        }
    }
});


export default QuoteHistorySlice;