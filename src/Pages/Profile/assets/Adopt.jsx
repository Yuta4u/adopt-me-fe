import { useDispatch } from "react-redux"
import { fetchHistoryByUser } from "../../../Redux/history"
import checkboxImg from "./img/checkbox.png"

import { useState, useEffect } from "react"
import ModalAdopt from "./ModalAdopt"

const Adopt = () => {
  const [dataAdopt, setDataAdopt] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHistoryByUser()).then(
      (res) => setDataAdopt(res.payload.data),
      console.log(dataAdopt)
    )
  }, [])

  return (
    <>
      <ModalAdopt />
      <div className="adopt-container-fluid">
        <div className="div-adopt-1">
          <div class="row row-cols-3 div-adopt-2 gap-5">
            {dataAdopt.map((e) => (
              <button
                className="col btn-adopt"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalAdopt"
              >
                {e.Animal.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Adopt
