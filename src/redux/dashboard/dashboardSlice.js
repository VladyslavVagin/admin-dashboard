import { createSlice } from "@reduxjs/toolkit";
import { getDashboardInfo } from "./operations";

const initialState = {
  recentCustomers: [],
  incomeExpenses: [],
  allCustomers: null,
  allProducts: null,
  allSuppliers: null,
  isLoading: false
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getDashboardInfo.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getDashboardInfo.fulfilled, (state, {payload}) => {
            state.recentCustomers = payload.customers;
            state.incomeExpenses = payload.dashboard;
            state.allCustomers = payload.customersCount;
            state.allProducts = payload.productsCount;
            state.allSuppliers = payload.suppliersCount;
            state.isLoading = false;
          })
          .addCase(getDashboardInfo.rejected, (state, _) => {
            state.isLoading = false;
          });
        },
});

export const dashboardReducer = dashboardSlice.reducer;