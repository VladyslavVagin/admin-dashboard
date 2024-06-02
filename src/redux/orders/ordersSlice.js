import { createSlice } from "@reduxjs/toolkit";
import { getOrders, getOrdersByQuery } from "./operations";

const initialState = {
    orders: [],
    isLoading: false,
    isError: false
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getOrders.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getOrders.fulfilled, (state, {payload}) => {
            state.orders = payload;
            state.isLoading = false;
            state.isError = false;
          })
          .addCase(getOrders.rejected, (state, _) => {
            state.isLoading = false;
            state.isError = true;
          })
          .addCase(getOrdersByQuery.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getOrdersByQuery.fulfilled, (state, {payload}) => {
            state.orders = payload;
            state.isLoading = false;
            state.isError = false;
          })
          .addCase(getOrdersByQuery.rejected, (state, _) => {
            state.isLoading = false;
            state.isError = true;
          });
        },
});

export const ordersReducer = ordersSlice.reducer;