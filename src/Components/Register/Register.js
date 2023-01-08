// styling
import { Report, Loading } from "notiflix"
import Logo from "./assets/img/adopt-me-logo.png"
import Logos from "./assets/img/logos.png"
import "./assets/register.css"

// react
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

// axios
import axios from "axios"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const formRegister = { username, email, password }
  const nav = useNavigate()

  // ========== HANDLE REGISTER ==========
  const registerSuccess = () => {
    return Report.success(
      "REGISTER BERHASIL :)",
      "terima kasih, register telah berhasil",
      "Okay",
      () => nav("/login"),
      {
        success: {
          backOverlayColor: "rgba(0,0,0,0.5)",
        },
      }
    )
  }

  function registerFailure(msg) {
    return Report.failure(
      "REGISTER GAGAL :(",
      "invalid input / " + msg,
      "OKAY",
      Loading.remove(),
      {
        failure: {
          backOverlayColor: "rgba(0,0,0,0.5)",
        },
      }
    )
  }

  const handleRegister = async () => {
    try {
      const data = await axios.post(
        "http://localhost:8000/user/v1/register",
        formRegister
      )
      // if (data && formRegister) {
      //   registerSuccess()
      // }
      console.log(data)
    } catch (err) {
      registerFailure(err.response.data.message)
    }
  }

  return (
    <div className="container-register-fluid min-vh-100">
      <div className="register mx-auto my-auto">
        <div className="logo-register">
          <img src={Logos} className="logos-register" />
        </div>
        <div className="form-register mx-auto">
          <div className="username">
            <label className="form-label">Username</label>
            <input
              type={"text"}
              className="form-control mb-2"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="email">
            <label className="form-label">Email</label>
            <input
              type={"email"}
              className="form-control mb-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label className="form-label">Password</label>
            <input
              type={"password"}
              className="form-control mb-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-register btn-light mt-2 mx-auto"
            onClick={() => handleRegister()}
          >
            Register
          </button>
          <div className="nav-login">
            sudah punya akun?<NavLink to="/login">login</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
