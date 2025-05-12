import React from 'react';
import deleteIcon from "../../assets/delete-icon-grey.svg";

function Wishlist() {
  return (
    <section className="common-section cart-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="cart-details-wrapper">
              <div className="cart-details-list">
                <h3>My Wishlist (2)</h3>
                <div className="deliveried-product-wrapper">
                  <div className="deliveried-product">
                    <figure className="delivered-image">A</figure>
                    <div className="delivered-content">
                      <h3>Title</h3>
                      <p>Price</p>
                    </div>
                    <div className="delete-wishlist">
                      <img src={deleteIcon} />
                    </div>
                  </div>
                  <div className="deliveried-product">
                    <figure className="delivered-image">A</figure>
                    <div className="delivered-content">
                      <h3>Title</h3>
                      <p>Price</p>
                    </div>
                    <div className="delete-wishlist">
                      <img src={deleteIcon} />
                    </div>
                  </div>
                  <div className="deliveried-product">
                    <figure className="delivered-image">A</figure>
                    <div className="delivered-content">
                      <h3>Title</h3>
                      <p>Price</p>
                    </div>
                    <div className="delete-wishlist">
                      <img src={deleteIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wishlist