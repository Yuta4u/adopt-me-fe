// STYLING
import axios from "axios"
import "./assets/detail.css"

// react
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchAllAnimalById } from "../../Redux/animal"
import { useNavigate } from "react-router-dom"

// assets
import Headers from "../../Components/Headers"

const Detail = (props) => {
  const [data, setData] = useState([])
  const idanimal = new URLSearchParams(window.location.search).get("id")
  const dispatch = useDispatch()
  const nav = useNavigate()

  useEffect(() => {
    dispatch(fetchAllAnimalById(idanimal)).then((res) => {
      setData(res.payload.data[0])
    })
  }, [idanimal])

  // CONVERT RUPIAH
  const convertRupiah = (num) => {
    return num
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/\d{1,3}/g)
      .join(".")
      .split("")
      .reverse()
      .join("")
  }
  return (
    <>
      <Headers />
      <div className="detail-container  min-vh-100">
        <div className="row detail mx-auto">
          <div className="col-3 detail-image">
            <img
              src={`http://localhost:8000/${data?.images?.replace(`\\`, "/")}`}
              className="detail-img"
            />
            {/* {data ? (
          ) : (
            ""
          )} */}
          </div>
          <div className="detail-deskripsi">
            <div className="card-deskripsi">
              <div className="div-name">{data.name}</div>
              <div className="div-jenis">
                <div className="jenis">Jenis</div>
                <div className="jenis-data">{data.jenis}</div>
              </div>
              <div className="div-deskripsi">
                <div className="deskripsi">Deskripsi</div>
                <div className="deskripsi-data">{data.deskripsi}</div>
              </div>
              <div className="div-adopt">
                <div className="adopt">biaya adopt</div>
                <div className="adopt-data">
                  {data.harga ? convertRupiah(data.harga) : ""}
                </div>
              </div>
            </div>
            <div className="info">
              Sistem adopsi hewan di adopt me adalah, calon adopter membayar 50%
              dengan saldo lalu owner akan menerima / mengkonfirmasi bahwa sudah
              ada calon adopter. Lalu owner akan memberi lokasi untuk melunaskan
              sisanya dan bertransaksi.
            </div>
            <button className="button-detail adopt-now">ADOPT SEKARANG</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
