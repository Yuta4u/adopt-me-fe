import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "./database/config"

export const fetchAllAnimal = createAsyncThunk(
  "Animal/fetchAllAnimal",
  async () => {
    try {
      const response = await api.get("/animal/v1/allAnimal")
      return response.data
    } catch (err) {
      console.log(err)
      return err
    }
  }
)

export const fetchAllAnimalById = createAsyncThunk(
  "Animal/fetchAllAnimalById",
  async (idAnimal) => {
    try {
      console.log(idAnimal)
      const response = await api.get(`/animal/v1/animalById/${idAnimal}`)
      return response.data
    } catch (err) {
      console.log(err)
      return err
    }
  }
)

export const fetchAnimalByUser = createAsyncThunk(
  "Animal/fetchAnimalByUser",
  async () => {
    try {
      const response = await api.get(`/animal/v1/animalByUser`, {
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

export const fetchPostAnimal = createAsyncThunk(
  "Animal/postAnimal",
  async (data) => {
    try {
      const response = await api.post(`/animal/v1/postAnimal`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      })
      return response.data
    } catch (err) {
      console.log(err)
      return err
    }
  }
)

const initialState = {
  Animal: [],
  AnimalId: [],
  isLoading: [],
  AnimalPost: [],
  AnimalByUser: [],
}
const animalSlice = createSlice({
  name: "Animal",
  initialState,
  reducers: {},
  extraReducers: {
    // =================== GET Animal ============================
    [fetchAllAnimal.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchAllAnimal.fulfilled]: (state, action) => {
      return { ...state, loading: false, Animal: action.payload }
    },
    [fetchAllAnimal.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
    // =================== GET Animal ============================
    [fetchAllAnimalById.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchAllAnimalById.fulfilled]: (state, action) => {
      return { ...state, loading: false, AnimalId: action.payload }
    },
    [fetchAllAnimalById.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
    // =================== GET Animal by USER ============================
    [fetchAnimalByUser.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchAnimalByUser.fulfilled]: (state, action) => {
      return { ...state, loading: false, AnimalByUser: action.payload }
    },
    [fetchAnimalByUser.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
    // =================== POST Animal ============================
    [fetchPostAnimal.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchPostAnimal.fulfilled]: (state, action) => {
      return { ...state, loading: false, AnimalPost: action.payload }
    },
    [fetchPostAnimal.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
  },
})

export const { createProduct } = animalSlice.actions
export const isLoading = (state) => state.Animal.loading

export default animalSlice.reducer
