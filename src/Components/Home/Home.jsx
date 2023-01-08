// styling
import axios from "axios"
import "./assets/home.css"

// assets
import Logo from "./assets/img/adopt-me-logo.png"
import Logos from "./assets/img/logos.png"
import Banner1 from "./assets/img/banner1.png"
import Banner2 from "./assets/img/banner2.jpg"
import Banner3 from "./assets/img/banner3.jpg"
import Dummy from "./assets/img/test-1.jpeg"
import Dummy2 from "./assets/img/test-2.jpg"

import React, { useEffect, useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./assets/home.css"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllAnimal } from "../../Redux/animal"
import Detail from "../Detail/Detail"

const Home = () => {
  const [animal, setAnimal] = useState([])
  const [idanimal, setIdAnimal] = useState("")
  const stateUser = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ls = localStorage.getItem("token")

  const handleNavbarLogin = () => {
    ls ? navigate("/profile") : navigate("/login")
  }

  useEffect(() => {
    dispatch(fetchAllAnimal()).then((res) => {
      setAnimal(res.payload.data)
    })
  }, [])

  return (
    <div className="container-fluid home">
      <div className="header">
        <img src={Logos} className="img-logo" />
        <hr className="hr"></hr>
        <img
          src={Logo}
          className="home-profile rounded-circle"
          onClick={() => handleNavbarLogin()}
        ></img>
      </div>

      {/* ========== CAROUSEL BUTTON CONTROLLER ========== */}
      <div
        id="carouselExampleCaptions"
        className="carousel banner slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* ========== BANNER CONTENT ========== */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner2} className="home-banner d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5>FIRST SLIDE LABEL</h5>
              <p>LEL</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img src={Banner3} className="home-banner d-block w-100" />
          </div>
        </div>
      </div>

      {/* ========== CARD CONTENT ========== */}

      <div className="slide-container">
        <div className="cat">Cat</div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={5}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {animal.map((animal, i) => (
            <>
              <SwiperSlide className="card" key={i}>
                <img
                  src={`http://localhost:8000/${animal.images.replace(
                    `\\`,
                    "/"
                  )}`}
                  alt=""
                  className="card-image"
                  // {...(setIdAnimal = animal.id)}
                  // onClick={navigate("/home/detail")}
                  onClick={(e) => navigate(`/home/detail/?id=${animal.id}`)}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>

      <div className="dog">LEL</div>
    </div>
  )
}

export default Home
