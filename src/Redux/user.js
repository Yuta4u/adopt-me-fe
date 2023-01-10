import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "./database/config"

export const register = async () => {
  try {
    const post = await axios.post(api + "/user/v1/register")

    if (post) {
      console.log("BERHASIL REGISTER")
    }
  } catch (err) {
    console.log(err)
  }
}

export const fetchLogin = createAsyncThunk("users/loginUsers", async (data) => {
  try {
    const res = await api.post("/user/v1/login", data)
    if (res.data.token) {
      localStorage.setItem("token", res.data.token)
      return res.data
    } else {
      throw new Error(res.data.message)
    }
  } catch (err) {
    return err
  }
})

export const fetchUserId = createAsyncThunk(
  "users/loginUsers",
  async (data) => {
    try {
      const res = await api.get("/user/v1/userId/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      return res.data
    } catch (err) {
      return err
    }
  }
)

export const fetchUserById = createAsyncThunk(
  "users/userById",
  async (data) => {
    try {
      const res = await api.get(`/user/v1/userById/${data.id}`)
      return res.data
    } catch (err) {
      return err
    }
  }
)

export const fetchPutUser = createAsyncThunk("users/putUsers", async (data) => {
  try {
    const res = await api.put("/user/v1/updateUser", data, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
  } catch (err) {
    return err
  }
})

export const fetchPutUserById = createAsyncThunk(
  "users/putUsersById",
  async ({ idUser, saldo }) => {
    console.log(idUser, saldo)
    try {
      const res = await api.put(`/user/v1/updateUserById/${idUser}`, { saldo })
      return res.data
    } catch (err) {
      return err
    }
  }
)

const initialState = {
  register: [],
  user: [],
  userSeller: [],
  saldo: [],
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    // =================== GET users ============================
    [fetchLogin.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchLogin.fulfilled]: (state, action) => {
      return { ...state, loading: false, login: action.payload }
    },
    [fetchLogin.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
    // =================== GET users Id============================
    [fetchUserId.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchUserId.fulfilled]: (state, action) => {
      return { ...state, loading: false, user: action.payload }
    },
    [fetchUserId.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
    // =================== PUT users Id============================
    [fetchPutUser.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchPutUser.fulfilled]: (state, action) => {
      return { ...state, loading: false, saldo: action.payload }
    },
    [fetchPutUser.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
    // =================== GET user by id ============================
    [fetchUserById.pending]: (state, action) => {
      return { ...state, loading: true, error: null }
    },
    [fetchUserById.fulfilled]: (state, action) => {
      return { ...state, loading: false, userSeller: action.payload }
    },
    [fetchUserById.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error }
    },
  },
})

export const { setAuthenticated, setError } = usersSlice.actions
export default usersSlice.reducer
