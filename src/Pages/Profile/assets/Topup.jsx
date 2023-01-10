import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPutUser, fetchUserId } from "../../../Redux/user"

const Topup = () => {
  const [saldoTopup, setSaldoTopup] = useState("")
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user.data)

  const handleSaldo = (x) => {
    var a = document.getElementsByTagName("a")
    setSaldoTopup(a[x].getAttribute("value"))
  }

  const handleTopup = (x) => {
    dispatch(
      fetchPutUser({ saldo: Number(saldoTopup) + Number(user.saldo) })
    ).then((res) => {
      dispatch(fetchUserId())
      console.log(res)
    })
  }

  useEffect(() => {}, [saldoTopup])

  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Topup
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                placeholder="lel"
              >
                {saldoTopup}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a
                    class="dropdown-item"
                    value="50000"
                    onClick={() => handleSaldo(0)}
                  >
                    50.000
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    value="100000"
                    onClick={(e) => handleSaldo(1)}
                  >
                    100.000
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    value="1000000"
                    onClick={() => handleSaldo(2)}
                  >
                    1.000.000
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => handleTopup()}
            >
              Topup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topup
