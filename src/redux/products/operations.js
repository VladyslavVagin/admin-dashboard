// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/api/products");
      return res.data;
    } catch (error) {
      toast.error("ERROR, Connection error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsByQuery = createAsyncThunk(
  "products/getByQuery",
  async (query, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get(`/api/products?query=${query}`);
      return res.data;
    } catch (error) {
      toast.error("ERROR, No orders found");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
