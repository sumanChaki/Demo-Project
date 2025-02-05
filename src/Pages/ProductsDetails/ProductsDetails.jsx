import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiRequest from '../../Utility/apiRequest';
import { url } from '../../Utility/endPoint';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';

function ProductsDetails() {
const { productId } = useParams();
const [productDetails, setProductDetails] = useState({});

const fetchSingleProduct = async () => {
    const individualProduct = await apiRequest(
      `${url.productUrl}/${productId}`
    );
    console.log(individualProduct);
    setProductDetails(individualProduct);
}

useEffect(() => {
    fetchSingleProduct()
}, [])

  return (
    <div className="container">
      <h4>Product details page is {productId}</h4>

      <ProductDetails productDetails={productDetails} />

      <div className="similar-products-wrapper">
        <h2>Similar products</h2>
        <div className="similar-products">
          <div className="similar-products-item">
            <figure className="similar-products-image">
              <img src="https://placehold.co/600x400/png" />
            </figure>
            <div className="similar-products-content">
              <h4>Product title</h4>
              <h5>
                Price: <span>10000</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails