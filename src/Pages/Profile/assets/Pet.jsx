import axios from "axios";
import img from "./img/kucing.jpg";

<<<<<<< HEAD
import Form from "./Form";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Pet = () => {
  const [dataAnimal, setDataAnimal] = useState([]);
  const getAnimalByUserId = () => {
    axios
      .get("http://localhost:8000/animal/v1/animalByUser/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setDataAnimal(res.data.data));
  };

  useEffect(() => {
    getAnimalByUserId();
  }, []);
=======
import Form from "./Form"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllAnimalById, fetchAnimalByUser } from "../../../Redux/animal"

const Pet = () => {
  const [dataAnimal, setDataAnimal] = useState([])
  const animal = useSelector((state) => state.animal.AnimalPost)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAnimalByUser()).then((res) => setDataAnimal(res.payload.data))
  }, [animal])
>>>>>>> 823cc9a7a878f371bdacbee9ab2f17466b9f0d1d

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
                  <div class="deroul_titre">{e.name}</div>
                  <div class="deroul_soustitre">{e.jenis}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
