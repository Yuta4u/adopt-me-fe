// STYLING
import "./assets/detail.css";
import Swal from "sweetalert2";

// react
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAnimalById } from "../../Redux/animal";
import { useNavigate } from "react-router-dom";

// assets
import Headers from "../../Components/Headers";
import { fetchPostHistory } from "../../Redux/history";
import { fetchPutUser, fetchUserId } from "../../Redux/user";

const Detail = () => {
  const [data, setData] = useState([]);
  const idanimal = new URLSearchParams(window.location.search).get("id");
  const user = useSelector((state) => state.users.user.data);
  const dispatch = useDispatch();

  console.log();

  const dataPostHistory = {
    idAnimal: data.id,
    dp: Number(data.harga / 2),
    alamat: "",
    status: "no",
  };

  const handleAdoptNow = async (x) => {
    const { value: accept } = await Swal.fire({
      title: `DP 50% (Rp ${convertRupiah(x / 2)})`,
      // input: "checkbox",
      // inputValue: 1,
      // inputPlaceholder: `DP 50% (Rp ${convertRupiah(x / 2)})`,
      confirmButtonText: "Adopt sekarang",
      inputValidator: (result) => {
        return !result && "You need to agree with T&C";
      },
    });

    if (accept) {
      if (Number(user.saldo) >= Number(data.harga / 2)) {
        dispatch(fetchPostHistory(dataPostHistory));
        dispatch(
          fetchPutUser({ saldo: Number(user.saldo) - Number(data.harga / 2) })
        );
        dispatch(fetchUserId());
        Swal.fire("Terima kasih, tunggu konfirmasi dari Open Adopt:)");
      } else {
        Swal.fire("Maaf, saldo anda tidak cukup!");
      }
    }
  };

  useEffect(() => {
    dispatch(fetchAllAnimalById(idanimal)).then((res) => {
      setData(res.payload.data[0]);
    });
  }, [idanimal]);

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
      .join("");
  };
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
            <button
              className="button-detail adopt-now"
              onClick={() => handleAdoptNow(data.harga)}
            >
              REQUEST ADOPT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
