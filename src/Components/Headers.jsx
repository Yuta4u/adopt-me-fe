import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchUserId } from "../Redux/user"
import Logo from "./assets/img/adopt-me-logo.png"
import Logos from "./assets/img/logos.png"
import "./assets/headers.css"

const Headers = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const ls = localStorage.getItem("token")
  const dt = useSelector((state) => state)
  console.log(dt)

  const handleNavbarLogin = () => {
    ls ? navigate("/profile") : navigate("/login")
  }

  const cek = () => {
    dispatch(fetchUserId()).then((res) => {
      //  navigate("/profile");
    })
  }
  const home = () => {
    navigate("/home")
  }
  useEffect(() => {
    cek()
  }, [])

  return (
    <div className="header">
      <img src={Logos} className="img-logo-header" onClick={() => home()} />
      <hr className="hr"></hr>
      <img
        src={Logo}
        className="home-profile-header rounded-circle"
        onClick={() => handleNavbarLogin()}
      ></img>
    </div>
  )
}
export default Headers
