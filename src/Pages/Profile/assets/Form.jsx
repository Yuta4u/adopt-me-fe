import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchPostAnimal } from "../../../Redux/animal"

const Form = () => {
  const [hewan, setHewan] = useState("")
  const [nama, setNama] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [biaya, setBiaya] = useState("")
  const [image, setImage] = useState([])

  const dispatch = useDispatch()

  const data = {
    name: nama,
    jenis: hewan,
    deskripsi,
    harga: biaya,
    images: image,
  }

  const handlePostAnimal = () => {
    dispatch(fetchPostAnimal(data)).then((res) => console.log(res))
  }

  return (
    <>
      <button
        type="button"
        class="btn-open-adopt mt-3"
        data-bs-toggle="modal"
        data-bs-target="#popup"
      >
        POST ADOPSI
      </button>

      <div id="popup" class="modal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <p> Posting Adopsi </p>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>

            <div class="modal-body">
              <div class="input-group mb-3">
                <select
                  class="form-select"
                  id="inputGroupSelect01"
                  onChange={(e) => setHewan(e.target.value)}
                >
                  <option selected>Hewan apa..</option>
                  <option value="Kucing">Kucing</option>
                  <option value="Anjing">Anjing</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile01"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Nama Hewan</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="nama.."
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Deskripsi Hewan
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="deskripsi.."
                  onChange={(e) => setDeskripsi(e.target.value)}
                ></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Biaya adopsi</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="xxx"
                  onChange={(e) => setBiaya(e.target.value)}
                />
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => handlePostAnimal()}
              >
                POSTING
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
