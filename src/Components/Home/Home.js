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

import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./assets/home.css"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const nav = useNavigate()

  // const datas = () => {
  //   const {data} = await axios.get("http://localhost:8000/v1/allAnimal")

  // }

  return (
    <div className="container-fluid home">
      <div className="header">
        <img src={Logos} className="img-logo" />
        <hr className="hr"></hr>
        <img src={Logo} className="profile rounded-circle"></img>
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
          <SwiperSlide className="card">Slide 1</SwiperSlide>
          <SwiperSlide className="card">Slide 2</SwiperSlide>
          <SwiperSlide className="card">Slide 3</SwiperSlide>
          <SwiperSlide className="card">Slide 4</SwiperSlide>
          <SwiperSlide className="card">Slide 5</SwiperSlide>
          <SwiperSlide className="card">Slide 6</SwiperSlide>
          <SwiperSlide className="card">Slide 7</SwiperSlide>
          <SwiperSlide className="card">Slide 8</SwiperSlide>
          <SwiperSlide className="card">Slide 9</SwiperSlide>
        </Swiper>
      </div>

      <div className="dog">LEL</div>
    </div>
  )
}

export default Home
