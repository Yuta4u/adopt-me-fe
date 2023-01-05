// import { createSlice, createAsy } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit"
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

const initialState = {
  register: [],
}

const usersSlice = {
  name: "users",
  initialState,
  extraReducers: {
    setRegister: (state, action) => {
      state.register = action.payload
    },

    // [register.pending]: (state) => {
    //   return { ...state, loading: true }
    // },
    // [register.fulfilled]: (state, action) => {
    //   if (!action.payload) {
    //     return {
    //       ...state,
    //       loading: false,
    //       error: "register gagal",
    //       status: true,
    //     }
    //   }
    //   return {
    //     ...state,
    //     loading: false,
    //     status: true,
    //     register: action.payload,
    //   }
    // },
    // [register.rejected]: (state, action) => {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error.message,
    //     status: false,
    //   }
    // },
  },
  //   extraReducers: [fetchLogin.pending]: (state) => {
  //     return { ...state, loading: true };
  //   },
  //   [fetchLogin.fulfilled]: (state, action) => {
  //     if (!action.payload)
  //       return {
  //         ...state,
  //         loading: false,
  //         error: "Username atau Passsword Salah",
  //         status: true,
  //       };
  //     else
  //       return { ...state, loading: false, status: true, lastRegister: false };
  //   },
  //   [fetchLogin.rejected]: (state, action) => {
  //     return {
  //       ...state,
  //       loading: false,
  //       error: action.error.message,
  //       status: false,
  //     };
  //   },
}
