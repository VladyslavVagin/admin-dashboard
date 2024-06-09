import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductsByQuery } from "./operations";

const initialState = {
    products: [],
    categories: [],
    isLoading: false,
    isError: false
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getProducts.fulfilled, (state, {payload}) => {
            state.products = payload.products;
            state.categories = payload.categories;
            state.isLoading = false;
            state.isError = false;
          })
          .addCase(getProducts.rejected, (state, _) => {
            state.isLoading = false;
            state.isError = true;
          })
          .addCase(getProductsByQuery.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getProductsByQuery.fulfilled, (state, {payload}) => {
            state.products = payload;
            state.isLoading = false;
            state.isError = false;
          })
          .addCase(getProductsByQuery.rejected, (state, _) => {
            state.isLoading = false;
            state.isError = true;
          });
        },
});

export const productsReducer = productsSlice.reducer;