// styling
import Image from "./assets/img/adopt-me-banner.png"
import Logo from "./assets/img/adopt-me-logo.png"
import Logos from "./assets/img/logos.png"
import "./assets/login.css"

// react
import { useState, useEffect } from "react"

// others / assets
import { getAllUser } from "../../crud/api/user"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const nav = useNavigate()

  // ========== HANDLE LOGIN ==========
  const handleLogin = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/user/v1/login", {
        email,
        password,
      })
      if (data.statusLogin === "Berhasil") {
        localStorage.setItem("token", data.token)
        nav("/home")
      }
    } catch (err) {
      console.log(err)
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
            <div className="email mb-3">
              <label className="form-label">Email address</label>
              <input
                type={"email"}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password mb-3">
              <label className="form-label">password</label>
              <input
                type={"password"}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-light mb-3"
                onClick={() => handleLogin()}
              >
                login
              </button>
              <button
                type="button"
                className="btn btn-register btn-light mb-3"
                onClick={() => nav("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
