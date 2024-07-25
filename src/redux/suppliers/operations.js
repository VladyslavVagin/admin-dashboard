// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getSuppliers = createAsyncThunk(
  "suppliers/getAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/api/suppliers");
      return res.data;
    } catch (error) {
      toast.error("ERROR, Connection error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSuppliersByQuery = createAsyncThunk(
  "suppliers/getByQuery",
  async (query, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get(`/api/suppliers?query=${query}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      toast.error("ERROR, Connection error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSupplier = createAsyncThunk(
  "suppliers/add",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.post("/api/suppliers", data);
      toast.success("Supplier added successfully");
      console.log(res.data);
      return res.data;
    } catch (error) {
      toast.error("ERROR, Connection error");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
