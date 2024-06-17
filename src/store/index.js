import { configureStore } from "@reduxjs/toolkit";


import QuoteHistorySlice from "./slices/quote-history";


const store = configureStore({
    reducer: QuoteHistorySlice.reducer,
})


export const QuoteHistoryActions = QuoteHistorySlice.actions;

export default store;