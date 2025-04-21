import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiRequest = async (endPoint) => {
    const productListing = await axios.get(`${BASE_URL}${endPoint}`);
    return productListing.data;
}

const loginUser = async (username, password) => {
    try {
        const response = await axios.post(
          `${BASE_URL}/auth/login`,
          { username, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        return response.data
        
    } catch (error) {
       throw new Error("Login failed") 
    }
}

const signupUser = async (name, email, phoneNumber, password, confirmPassword) => {
    try {
        const response = await axios.post(
          `${BASE_URL}/users/add`,
          {
            name,
            email,
            phoneNumber,
            password,
            confirmPassword,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
          }
        );
        return response.data
        
    } catch (error) {
     throw new Error ("Registration failed")   
    }
}


export { apiRequest, loginUser, signupUser };