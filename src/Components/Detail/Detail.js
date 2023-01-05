// STYLING
import axios from "axios"
import "./assets/detail.css"

// react
import { useEffect, useState } from "react"

const Detail = () => {
  const [data, setData] = useState([])

  const getAnimalById = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/animal/v1/animalById/7"
      )
      setData(data.data[0])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAnimalById()
  }, [])

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
    <div className="detail-container  min-vh-100">
      <div className="row detail mx-auto">
        <div className="col-3 detail-image">
          {/* {data ? (
            <img
              src={`http://localhost:8000/${data.images.replace("\\", "/")}`}
              className="detail-img"
            />
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
            dari dengan saldo lalu owner akan menerima / mengkonfirmasi bahwa
            sudah ada calon adopter. Lalu owner akan memberi lokasi untuk
            melunaskan 50% dan bertransaksi di tempat
          </div>
          <button className="button-adopt">ADOPT SEKARANG</button>
        </div>
      </div>
    </div>
  )
}

export default Detail