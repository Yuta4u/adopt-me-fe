import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "./database/config"

export const fetchPostHistory = createAsyncThunk(
  "History/postHistory",
  async (data) => {
    try {
      const response = await api.post(`/history/v1/addHistory`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      return response.data
    } catch (err) {
      console.log(err)
      return err
    }
  }
)

export const fetchHistoryByUser = createAsyncThunk(
  "History/fetchHistoryByUser",
  async () => {
    try {
      const response = await api.get(`/history/v1/historyByUser`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      return response.data
    } catch (err) {
      console.log(err)
      return err
    }
  }
)

export const fetchHistoryById = createAsyncThunk(
  "History/fetchHistoryById",
  async (data) => {
    try {
      const response = await api.get(`/history/v1/history/${data}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      return response.data
    } catch (err) {
      console.log(err)
      return err
    }
  }
)

export const fetchUpdateHistory = createAsyncThunk(
  "History/fetchUpdateHistory",
  async (data) => {
    try {
      const response = await api.put(`/history/v1/historyUpdate`, data)
      return response.data
    } catch (err) {
      console.log(err)
      return err
    }
  }
)

const initialState = {
  historyByUser: [],
  postHistory: [],
  adopt: [],
}

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    // =================== HISTORY BY USER ============================
    [fetchHistoryByUser.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchHistoryByUser.fulfilled]: (state, action) => {
      return { ...state, loading: false, historyByUser: action.payload }
    },
    [fetchHistoryByUser.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
    // =================== HISTORY BY ID ============================
    [fetchHistoryById.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchHistoryById.fulfilled]: (state, action) => {
      return { ...state, loading: false, adopt: action.payload }
    },
    [fetchHistoryById.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
    // =================== POST HISTORY BY USER ============================
    [fetchPostHistory.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchPostHistory.fulfilled]: (state, action) => {
      return { ...state, loading: false, postHistory: action.payload }
    },
    [fetchPostHistory.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
  },
})

export const { createProduct } = historySlice.actions
export const isLoading = (state) => state.history.loading

export default historySlice.reducer
