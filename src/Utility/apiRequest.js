import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiRequest = async (endPoint) => {
  const productListing = await axios.get(`${BASE_URL}${endPoint}`);
  return productListing.data;
};

const loginUser = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, userData, {
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
      `${BASE_URL}/api/auth/register`,
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

export { apiRequest, loginUser, signupUser };
