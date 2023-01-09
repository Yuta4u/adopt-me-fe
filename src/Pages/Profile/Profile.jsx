//styling
import "./assets/profile.css";
import defaultProfileImg from "./assets/img/avatar.png";
import Logo from "./assets/img/adopt-me-logo.png";
import Logos from "./assets/img/logos.png";

// content-profile
import Pet from "./assets/Pet";
import Adopt from "./assets/Adopt";

// others
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAnimal } from "../../Redux/animal";
import { useNavigate } from "react-router-dom";
import Headers from "../../Components/Headers";

const Profile = () => {
  const [animal, setAnimal] = useState([]);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  const nav = useNavigate();

  const handleLogout = () => {
    return localStorage.clear(), nav("/login"), alert("berhasil logout yey");
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="navbarkecil">
        <Headers />
      </div>
      <div className="profile-container-fluid sketchy min-vh-100">
        <div className="row profile">
          <div className="col-3 div-profile">
            <div className="profile-img">
              <img src={defaultProfileImg} className="profile-image" />
              <div className="saldo">5000</div>
            </div>

            <div className="profile-nav">
              <div className="pet-nav" onClick={(e) => setContent("pet")}>
                Pet
              </div>
              <div className="adopt-nav" onClick={(e) => setContent("adopt")}>
                Adopt
              </div>
              <div
                className="history-nav"
                onClick={(e) => setContent("history")}
              >
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
            {/* <Adopt /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
