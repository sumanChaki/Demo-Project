import React, { useEffect, useState } from "react";
import { apiRequest } from "../../Utility/apiRequest";
import { cartUrl } from "../../Utility/endPoint";
import { useSelector } from "react-redux";

function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const userId = useSelector((state) => state.auth.user.id);
  // console.log("userId >>", userId);

  const fetchUserCartItems = async () => {
    try {
      const allCartItems = await apiRequest(
        `${cartUrl.cartPoint}/user/${userId}`
      );
      setCartItem(allCartItems.carts);
      console.log("cart Details >>", allCartItems.carts);
      
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchUserCartItems();
  }, []);

  return (
    <section className="common-section cart-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart-details-wrapper">
              <div className="cart-details-list">
                <div className="delivey-card">
                  <div className="delivery-details">
                    <div className="delivery-details-wrap">
                      <p>
                        Deliver to: <span>Suman Chaki</span>
                      </p>
                      <div className="delivery-point">Home</div>
                    </div>
                    <p>Konnagar</p>
                  </div>
                  <div className="delivery-address-change">Change</div>
                </div>

                <div className="deliveried-product-wrapper">
                  {cartItem?.length > 0 &&
                    cartItem.map((item, index) => (
                      <div key={index}>
                        {item?.recipes?.length > 0 &&
                          item?.recipes?.map((item, index) => (
                            <div className="deliveried-product" key={index}>
                              <figure className="delivered-image">
                                <img src={item?.thumbnail} alt="#" />
                              </figure>
                              <div className="delivered-content">
                                <h3>{item?.title}</h3>
                                <p>Price: ₹{item?.price ?? "N/A"}</p>
                                <div className="product-info-wrapper">
                                  <div className="product-info">
                                    <div className="decrement-circle">-</div>
                                    <div className="product-quantity">
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="inputName"
                                        placeholder="1"
                                      />
                                    </div>
                                    <div className="increment-circle">+</div>
                                  </div>

                                  <div className="remove-later">
                                    <div className="save-later">
                                      Save For later
                                    </div>
                                    <div className="save-later">Remove</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}

                  <div className="deliveried-product">
                    <div className="btn place-order">Place Order</div>
                  </div>
                </div>
              </div>
              <div className="price-details-list">
                {cartItem?.length > 0 &&
                  cartItem.map((item, index) => (
                    <div key={index}>
                      <h3>Price Details</h3>
                      <ul>
                        <li>
                          <p>Price ({item?.totalRecipes} items)</p>
                          <p>{item?.total}</p>
                        </li>
                        <li>
                          <p>Delivery Charges</p>
                          <p>Free</p>
                        </li>
                      </ul>
                      <div className="total-price">
                        <h3>Total Price</h3>
                        <h3>{item?.total}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
