import { createSlice } from "@reduxjs/toolkit";
import { getCustomers } from "./operations";

const initialState = {
    customers: [],
    isLoading: false,
    isError: false
};

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getCustomers.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getCustomers.fulfilled, (state, {payload}) => {
            state.customers = payload;
            state.isLoading = false;
            state.isError = false;
          })
          .addCase(getCustomers.rejected, (state, _) => {
            state.isLoading = false;
            state.isError = true;
          });
        },
});

export const customerReducer = customerSlice.reducer;