import React from 'react'
import ProductDetailsSlider from './ProductDetailsSlider';
import ReviewCard from './ReviewCard';

function ProductDetails({productDetails}) {
  return (
    <div>
      {productDetails && (
        <div className="product-details-wrapper">
          <div className="product-details-image">
            <ProductDetailsSlider productDetails={productDetails} />
          </div>

          <div className="product-details-content">
            {productDetails?.title && <h2>{productDetails?.title}</h2>}

            {productDetails?.description && (
              <p>{productDetails?.description}</p>
            )}

            {productDetails?.price && (
              <h4>
                Price <strong>{productDetails?.price}</strong>
              </h4>
            )}

            {productDetails?.availabilityStatus && (
              <p>
                Availability:
                <strong>
                  {productDetails?.availabilityStatus
                    ? "Instock"
                    : "Product is not available"}
                </strong>
              </p>
            )}

            {productDetails?.category && (
              <p>
                category: <strong>{productDetails?.category}</strong>
              </p>
            )}

            <div className="tags">
              Tags:
              <ul>
                {productDetails?.tags?.length > 0 &&
                  productDetails?.tags?.map((item, index) => (
                    <li key={index}>
                      <strong>{item}</strong>
                    </li>
                  ))}
              </ul>
            </div>
            {productDetails?.returnPolicy && (
              <p>
                Return Policy: <strong>{productDetails?.returnPolicy}</strong>
              </p>
            )}

            <div className="product-cart-btn">
              <button type="button" className="btn add-cart">
                Add to Cart
              </button>
              <button type="button" className="btn">
                Buy Now
              </button>
            </div>
            <ReviewCard productDetails={productDetails} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails