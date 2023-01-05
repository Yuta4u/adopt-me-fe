import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./database/config";

// export const register = async () => {
//   try {
//     const post = await axios.post(api + "/user/v1/register");

//     if (post) {
//       console.log("BERHASIL REGISTER");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

export const fetchLogin = createAsyncThunk("users/loginUsers", async (data) => {
  try {
    const res = await api.post("/user/v1/login", data);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      return res.data;
    } else {
      throw new Error(res.data.message);
    }
  } catch (err) {
    return err;
  }
});

const initialState = {
  register: [],
  user: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    // =================== GET users ============================
    [fetchLogin.pending]: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    [fetchLogin.fulfilled]: (state, action) => {
      return { ...state, loading: false, login: action.payload };
    },
    [fetchLogin.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
  },
});

export const { setAuthenticated, setError } = usersSlice.actions;
export default usersSlice.reducer;
