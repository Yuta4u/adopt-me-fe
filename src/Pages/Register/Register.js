// styling
import { Report, Loading } from "notiflix"
import Logos from "./assets/img/logos.png"
import Image from "./assets/img/adopt-me-banner.png"
import "./assets/register.css"

// react
import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
      if (data && formRegister) {
        registerSuccess()
      }
      console.log(data)
    } catch (err) {
      registerFailure(err.response.data.message)
    }
  }

  return (
    <div className="container-login-fluid min-vh-100">
      <div className="row div-register mx-auto my-auto bg-white">
        <div className="col input-login banner">
          <img src={Image} className="banner-img " />
        </div>
        <div className="col input-login form-login">
          <div className="logo-login text-center">
            <img src={Logos} className="logo-img" />
          </div>
          <div className="form mx-auto">
            <div className="username mb-3">
              <label className="form-label">Username</label>
              <input
                type={"username"}
                className="form-control email-input"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="email mb-3">
              <label className="form-label">Email address</label>
              <input
                type={"email"}
                className="form-control email-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password mb-3">
              <label className="form-label">password</label>
              <input
                type={"password"}
                className="form-control password-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="button"
                className="btn reg-btn-register btn-light"
                onClick={() => handleRegister()}
              >
                Register
              </button>
              <button
                type="button"
                className="btn reg-btn-login btn-light"
                onClick={() => nav("/login")}
              >
                to login page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
