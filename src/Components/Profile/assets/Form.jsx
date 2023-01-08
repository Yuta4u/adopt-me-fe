const Form = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary mt-3"
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
                <select class="form-select" id="inputGroupSelect01">
                  <option selected>Hewan apa..</option>
                  <option value="Kucing">Kucing</option>
                  <option value="Anjing">Anjing</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile01" />
              </div>
              <div class="mb-3">
                <label class="form-label">Nama Hewan</label>
                <input type="text" class="form-control" placeholder="nama.." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Deskripsi Hewan
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="deskripsi.."
                ></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Biaya adopsi</label>
                <input type="text" class="form-control" placeholder="xxx" />
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
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
