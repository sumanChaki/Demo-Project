import React from 'react';
import { Link } from "react-router-dom";
import ProductCategoriesListing from './ProductCategoriesListing';

function ProductFilter({ categoryList }) {
  return (
    <div className="listing-sidebar">
      <div className="sidebar-sticky">
        <div className="sidebar-card">
          <div className="clear-filter-heading">
            <h4 className="p-0">2,906 matches</h4>
            <div>Clear</div>
          </div>
        </div>

        <div className="sidebar-card filter-component">
          <Link to="">Bikes</Link>
        </div>

        <ProductCategoriesListing categoryList={categoryList} />

        <div className="sidebar-card color-card">
          <h4>Color</h4>
          <div className="input-wrapper">
            <div className="input-wrapper-item">
              <input name="" type="checkbox" id="checkbox18" />
              <label htmlFor="checkbox18">
                <span className="color-palate"></span>Beige (60)
              </label>
            </div>

            <div className="input-wrapper-item">
              <input name="" type="checkbox" id="checkbox19" />
              <label htmlFor="checkbox19">
                <span className="color-palate"></span>Black (60)
              </label>
            </div>

            <div className="input-wrapper-item">
              <input name="" type="checkbox" id="checkbox20" />
              <label htmlFor="checkbox20">
                <span className="color-palate"></span>Blue (60)
              </label>
            </div>

            <div className="input-wrapper-item">
              <input name="" type="checkbox" id="checkbox21" />
              <label htmlFor="checkbox21">
                <span className="color-palate"></span>Green (60)
              </label>
            </div>

            <div className="input-wrapper-item">
              <input name="" type="checkbox" id="checkbox22" />
              <label htmlFor="checkbox22">
                <span className="color-palate"></span>Red (60)
              </label>
            </div>

            <div className="input-wrapper-item">
              <input name="" type="checkbox" id="checkbox23" />
              <label htmlFor="checkbox23">
                <span className="color-palate"></span>Silver (60)
              </label>
            </div>

            <div className="input-wrapper-item">
              <input name="" type="checkbox" id="checkbox24" />
              <label htmlFor="checkbox24">
                <span className="color-palate"></span>White (60)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;