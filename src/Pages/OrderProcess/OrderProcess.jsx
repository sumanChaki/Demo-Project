import React from 'react'

function OrderProcess() {
  return (
    <section className="common-section cart-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart-details-wrapper">
              <div className="cart-details-list">
                <div className="delivey-card">
                  <div className="delivery-details">
                    <h3>LOGIN</h3>
                    <div className='login-details'></div>
                  </div>
                  <div className="delivery-address-change">Change</div>
                </div>
                <div className="deliveried-product-wrapper">
                  <div className="deliveried-product">
                    <figure className="delivered-image">A</figure>
                    <div className="delivered-content">
                      <h3>Title</h3>
                      <p>Price</p>
                      <div className="product-info-wrapper">
                        <div className="product-info">
                          <div className="decrement-circle">-</div>
                          <div className="product-quantity">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="inputName"
                            />
                          </div>
                          <div className="increment-circle">+</div>
                        </div>

                        <div className="remove-later">
                          <div className="save-later">Save For later</div>
                          <div className="save-later">Remove</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="deliveried-product">
                    <figure className="delivered-image">A</figure>
                    <div className="delivered-content">
                      <h3>Title</h3>
                      <p>Price</p>
                      <div className="product-info-wrapper">
                        <div className="product-info">
                          <div className="decrement-circle">-</div>
                          <div className="product-quantity">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="inputName"
                            />
                          </div>
                          <div className="increment-circle">+</div>
                        </div>

                        <div className="remove-later">
                          <div className="save-later">Save For later</div>
                          <div className="save-later">Remove</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="deliveried-product">
                    <div className="btn place-order">Place Order</div>
                  </div>
                </div>
              </div>
              <div className="price-details-list">
                <h3>Price Details</h3>
                <ul>
                  <li>
                    <p>Price (1 item)</p>
                    <p>₹29,995</p>
                  </li>
                  <li>
                    <p>Delivery Charges</p>
                    <p>Free</p>
                  </li>
                </ul>
                <div className="total-price">
                  <h3>Total Price</h3>
                  <h3>₹5,090</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderProcess