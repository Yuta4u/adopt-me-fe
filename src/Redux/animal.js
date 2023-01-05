import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./database/config";

export const fetchAllAnimal = createAsyncThunk(
  "Animal/fetchAllAnimal",
  async () => {
    try {
      const response = await api.get("/animal/v1/allAnimal");
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const fetchAllAnimalById = createAsyncThunk(
  "Animal/fetchAllAnimalById",
  async (idAnimal) => {
    try {
      console.log(idAnimal);
      const response = await api.get(`/animal/v1/animalById/${idAnimal}`);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const initialState = {
  Animal: [],
  AnimalId: [],
  isLoading: [],
};
const animalSlice = createSlice({
  name: "Animal",
  initialState,
  reducers: {},
  extraReducers: {
    // =================== GET Animal ============================
    [fetchAllAnimal.pending]: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    [fetchAllAnimal.fulfilled]: (state, action) => {
      return { ...state, loading: false, Animal: action.payload };
    },
    [fetchAllAnimal.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
    // =================== GET Animal ============================
    [fetchAllAnimalById.pending]: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    [fetchAllAnimalById.fulfilled]: (state, action) => {
      return { ...state, loading: false, AnimalId: action.payload };
    },
    [fetchAllAnimalById.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
  },
});

export const { createProduct } = animalSlice.actions;
export const isLoading = (state) => state.Animal.loading;

export default animalSlice.reducer;
