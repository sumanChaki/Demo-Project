import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiRequest = async (endPoint) => {
  const productListing = await axios.get(`${BASE_URL}${endPoint}`);
  return productListing.data;
};

const loginUser = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post(`${BASE_URL}api/auth/login`, userData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

const signupUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}api/auth/register`,
      userData, // send the object directly
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("❌ Signup error:", error.response?.data || error.message);
    throw new Error("Registration failed");
  }
};


const addToCart = async (cartData) => {
  // console.log("cartData >>", cartData);
  
  try {
    const response = await axios.post(`${BASE_URL}cart/add`, cartData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(
      "❌ Add to cart error:",
      error.response?.data || error.message
    );
    throw new Error("Add to cart failed");
  }
};


  // const addToCart = async () => {
  //   try {
  //     const response = await axios.post(`${BASE_URL}carts/add`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userId: 1,
  //         products: [
  //           {
  //             id: 144,
  //             quantity: 4,
  //           },
  //           {
  //             id: 98,
  //             quantity: 1,
  //           },
  //         ],
  //       }),
  //       withCredentials: true,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error(
  //       "❌ Add to cart error:",
  //       error.response?.data || error.message
  //     );
  //     throw new Error("Add to cart failed");
  //   }
  // };

  

  

export { apiRequest, loginUser, signupUser, addToCart };
