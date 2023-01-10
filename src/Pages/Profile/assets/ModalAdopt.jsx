import { useDispatch, useSelector } from "react-redux"
import { fetchUpdateHistory } from "../../../Redux/history"
import { fetchPutUserById, fetchUserById } from "../../../Redux/user"

import { useEffect } from "react"

const ModalAdopt = () => {
  const dataAdopt = useSelector((state) => state.history.adopt)
  const dataSeller = useSelector((state) => state.users.userSeller.data)

  const dispatch = useDispatch()

  const handleAdopt = () => {
    return dispatch(
      fetchUpdateHistory({
        id: dataAdopt.data[0].id,
        status: "yes",
      }),
      dispatch(
        fetchPutUserById({
          idUser: dataSeller.id,
          saldo: Number(dataSeller.saldo) + Number(dataAdopt.data[0].dp),
        })
      )
    )
  }

  useEffect(() => {}, [])

  return (
    <>
      <div
        class="modal fade"
        id="exampleModalAdopt"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                RECEIPT
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Apakah anda yakin ini menyelesaikan transaksi adopt ini?
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Ya
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">
                RECEIPT
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Selesaikan transaksi sekarang..</div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                onClick={() => handleAdopt()}
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalAdopt
