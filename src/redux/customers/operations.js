// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getCustomers = createAsyncThunk(
  "customers/getAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/api/customers");
      console.log(res.data);
      return res.data;
    } catch (error) {
      toast.error("ERROR, Connection error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
