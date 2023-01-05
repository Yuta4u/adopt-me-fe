//styling
import "./assets/profile.css"
import defaultProfileImg from "./assets/img/avatar.png"

const Profile = () => {
  return (
    <>
      <div className="profile-container-fluid sketchy min-vh-100">
        <div className="row profile">
          <div className="col-3 div-profile">
            <div className="profile-img">
              <img src={defaultProfileImg} className="profile-image" />
            </div>

            <div className="profile-nav">
              <div className="pet-nav">Pet</div>
              <div className="adopt-nav">Adopt</div>
              <div className="history-nav">History</div>
            </div>
          </div>
          <div className="col profile-content"></div>
        </div>
      </div>
    </>
  )
}

export default Profile
