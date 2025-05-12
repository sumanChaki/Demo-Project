import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Components/Redux/Carts/CartsReducers";
import { apiRequest } from "../../Utility/apiRequest";
import { cartUrl } from "../../Utility/endPoint";

function Home() {
  const [cartDetails, setCartDetails] = useState("");
  const userId = useSelector((state) => state.auth.user.id);

  const dispatch = useDispatch();

  const fetchCartLength = async () => {
    try {
      const allCartItems = await apiRequest(
        `${cartUrl.cartPoint}/user/${userId}`
      );
      setCartDetails(allCartItems.carts);

      // console.log("allCartItems >>", allCartItems);
      dispatch(
        addCart({ userId: allCartItems.carts[0].userId, recipes: allCartItems.carts[0].recipes })
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCartLength();
  }, []);

  return (
    <section className="common-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>Home</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
