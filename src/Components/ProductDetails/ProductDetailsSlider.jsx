import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductDetailsSlider({ productDetails }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Ensure images is always an array
  let images = [];
  if (Array.isArray(productDetails?.images)) {
    images = productDetails.images; // Use as is if already an array
  } else if (typeof productDetails?.images === "string") {
    images = [productDetails.images]; // Convert single string to array
  }

  return (
    <div>
      {images.length > 0 ? (
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index}>
              <img
                src={item}
                alt={`Product ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
}

export default ProductDetailsSlider;
