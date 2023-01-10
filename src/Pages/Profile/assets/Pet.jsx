import axios from "axios";
import img from "./img/kucing.jpg";

import Form from "./Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAnimalById, fetchAnimalByUser } from "../../../Redux/animal";
import ReactPaginate from "react-paginate";

function Items({ currentItems }) {
  return (
    <>
      {currentItems.map((e) => (
        <div class="carreaux_presentation_light lel mt-3">
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
    </>
  );
}
const Paginated = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const animal = useSelector((state) => state.animal.AnimalPost);
  const [dataAnimal, setDataAnimal] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimalByUser()).then((res) =>
      setDataAnimal(res.payload.data)
    );
  }, [animal]);
  console.log(dataAnimal);
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = dataAnimal.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataAnimal.length / itemsPerPage);
  console.log(currentItems);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataAnimal.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="pet-container-fluid position-relative">
        <div className="row justify-content-center m-5">
          <Form className="lel" />
          <div className="col-md-12 mt-2">
            <div className="row gap-3">
              <Items currentItems={currentItems} />
              {/* {dataAnimal.map((e) => (
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
            ))} */}
            </div>
          </div>
        </div>
      </div>
      <div className="btn-pagination">
        <ReactPaginate
          className="d-flex justify-content-between "
          breakLabel=""
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

const Pet = () => {
  return <Paginated itemsPerPage={6} />;
};
export default Pet;
