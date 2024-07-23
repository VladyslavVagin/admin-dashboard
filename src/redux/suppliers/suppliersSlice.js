import { createSlice } from "@reduxjs/toolkit";
import { getSuppliers, getSuppliersByQuery } from "./operations";

const initialState = {
  suppliers: [],
  isLoading: false,
  isError: false,
};

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSuppliers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSuppliers.fulfilled, (state, { payload }) => {
        state.suppliers = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getSuppliers.rejected, (state, _) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getSuppliersByQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSuppliersByQuery.fulfilled, (state, { payload }) => {
        state.suppliers = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getSuppliersByQuery.rejected, (state, _) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const suppliersReducer = suppliersSlice.reducer;
