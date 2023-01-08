//styling
import "./assets/profile.css"
import defaultProfileImg from "./assets/img/avatar.png"

// content-profile
import Pet from "./assets/Pet"
import Adopt from "./assets/Adopt"

// others
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllAnimal } from "../../Redux/animal"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const [animal, setAnimal] = useState([])
  const dispatch = useDispatch()
  const user = useSelector((state) => state)
  const nav = useNavigate()

  const handleLogout = () => {
    return localStorage.clear(), nav("/login"), alert("berhasil logout yey")
  }

  useEffect(() => {
    console.log(user, "ini users")
  }, [])

  return (
    <>
      <div className="profile-container-fluid sketchy min-vh-100">
        <div className="row profile">
          <div className="col-3 div-profile">
            <div className="profile-img">
              <img src={defaultProfileImg} className="profile-image" />
            </div>

            <div className="profile-nav">
              <div className="pet-nav" onClick={(e) => content("pet")}>
                Pet
              </div>
              <div className="adopt-nav" onClick={(e) => content("adopt")}>
                Adopt
              </div>
              <div className="history-nav" onClick={(e) => content("history")}>
                History
              </div>
              <div className="logout-nav" onClick={() => handleLogout()}>
                Logout
              </div>
            </div>
          </div>
          <div className="col profile-content">
            <Pet props={animal} />
            {/* <Adopt /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
