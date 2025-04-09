import React from 'react'
import { Link } from 'react-router-dom';

function RecipesItemListing() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="product-listing-wrapper">
          <div className="product-listing-item">
            <figure className="product-image">
              <Link to={""}>
                <img src={""} alt={""} />
              </Link>
            </figure>
            <div className="product-listing-info">
              <h3>Test</h3>
              <div className="description">
                <p>Test</p>
              </div>
              <h4>
                Price: <span>Test</span>
              </h4>
              <Link to={""} className="btn">
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="product-pagination-btn">
          <button type="button" className="btn">
            Previous
          </button>

          <button type="button" className="btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipesItemListing