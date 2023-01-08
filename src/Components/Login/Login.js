// styling
import Image from "./assets/img/adopt-me-banner.png"
import Logo from "./assets/img/adopt-me-logo.png"
import Logos from "./assets/img/logos.png"
import "./assets/login.css"
import Swal from "sweetalert2"

// CommonJS
// react
import { useState, useEffect } from "react"

// others / assets
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchLogin } from "../../Redux/user"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const nav = useNavigate()

  // ========== HANDLE LOGIN ==========
  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    }
    dispatch(fetchLogin(data)).then((res) => {
      Swal.fire({
        position: "middle-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }).then((res) => {
        navigate("/home")
      })
    })
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
