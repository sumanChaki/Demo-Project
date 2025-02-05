import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiRequest = async (endPoint) => {
    const productListing = await axios.get(`${BASE_URL}${endPoint}`);
    return productListing.data;
}

export default apiRequest;