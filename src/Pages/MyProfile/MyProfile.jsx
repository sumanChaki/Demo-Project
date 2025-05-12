import React from 'react'

function MyProfile() {
  return (
    <section className="common-section personal-details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="card">
              <div class="form-group">
                <div className="form-group-text">
                  <label for="">Personal Information</label>
                  <div className="edit">Edit</div>
                </div>
                <div className="full-details">
                  <input type="text" placeholder="Suman" />
                  <input type="text" placeholder="Chaki" />
                  <div className="btn">Save</div>
                </div>
              </div>

              <div class="form-group">
                <div className="form-group-text">
                  <label for="">Email Address</label>
                  <div className="edit">Edit</div>
                </div>
                <div className="full-details">
                  <input type="text" placeholder="Suman" />
                  <div className="btn">Save</div>
                </div>
              </div>

              <div class="form-group">
                <div className="form-group-text">
                  <label for="">Mobile Number</label>
                  <div className="edit">Edit</div>
                </div>
                <div className="full-details">
                  <input type="text" placeholder="8961203531" />
                  <div className="btn">Save</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProfile