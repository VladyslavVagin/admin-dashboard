import { createSlice } from "@reduxjs/toolkit";
import { getSuppliers } from "./operations";

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
      });
  },
});

export const suppliersReducer = suppliersSlice.reducer;
