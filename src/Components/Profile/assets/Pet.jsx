import img from "./img/kucing.jpg"
import Form from "./Form"

const Pet = ({ props }) => {
  // console.log(props, "ini propsz")
  return (
    <div className="pet-container-fluid position-relative">
      <Form />
      {/* <div className="row justify-content-center m-5">
        <button className="md">open adopt</button>
        <div className="col-md-12">
          <div className="row gap-5">
            <div class="carreaux_presentation_light">
              <div class="shadow_swhow_mini">
                <img src={img} className="pet-card-img" />
                <div class="deroul_titre">PURE CSS :HOVER</div>
                <div class="deroul_soustitre">www.wifeo.com/code</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Pet
