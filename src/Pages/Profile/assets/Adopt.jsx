import { useDispatch, useSelector } from "react-redux"
import { fetchHistoryById, fetchHistoryByUser } from "../../../Redux/history"
import checkboxImg from "./img/checkbox.png"

import { useState, useEffect } from "react"
import ModalAdopt from "./ModalAdopt"
import { fetchAllAnimalById, fetchAnimalByUser } from "../../../Redux/animal"
import { fetchUserById } from "../../../Redux/user"

const Adopt = () => {
  const [dataAdopt, setDataAdopt] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHistoryByUser()).then((res) => setDataAdopt(res.payload.data))
  }, [])

  return (
    <>
      <ModalAdopt />
      <div className="adopt-container-fluid">
        <div className="div-adopt-1">
          <div class="row row-cols-3 div-adopt-2 gap-5">
            {dataAdopt.map((e) =>
              e.status === "no" ? (
                <button
                  className="col btn-adopt"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalAdopt"
                  onClick={() => {
                    const data = {
                      id: e.Animal.idUser,
                    }
                    dispatch(fetchHistoryById(e.id))
                    dispatch(fetchUserById(data))
                    // console.log(e.Animal.idUser)
                  }}
                >
                  {e.Animal.name}
                </button>
              ) : (
                false
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Adopt
