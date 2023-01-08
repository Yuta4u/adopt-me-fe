import axios from "axios"
import img from "./img/kucing.jpg"

import Form from "./Form"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Pet = () => {
  const [dataAnimal, setDataAnimal] = useState([])
  const user = useSelector((state) => state)
  console.log(user)

  const getAnimalByUserId = () => {
    axios
      .get("http://localhost:8000/animal/v1/animalByUser/10")
      .then((res) => setDataAnimal(res.data.data))
  }

  useEffect(() => {
    getAnimalByUserId()
  }, [])

  return (
    <div className="pet-container-fluid position-relative">
      <div className="row justify-content-center m-5">
        <Form className="lel" />
        <div className="col-md-12 mt-2">
          <div className="row gap-5">
            {dataAnimal.map((e) => (
              <div class="carreaux_presentation_light lel">
                <div class="shadow_swhow_mini lel">
                  <img
                    src={`http://localhost:8000/${e.images.replace(`\\`, "/")}`}
                    className="pet-card-img"
                  />
                  <div class="deroul_titre">PURE CSS :HOVER</div>
                  <div class="deroul_soustitre">www.wifeo.com/code</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pet
