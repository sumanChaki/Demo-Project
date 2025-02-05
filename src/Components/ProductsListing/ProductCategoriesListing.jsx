import React from 'react'

function ProductCategoriesListing({ categoryList }) {
  return (
    <div className="sidebar-card categories-card">
      <h4>Categories</h4>
      <div className="input-wrapper">
        {categoryList?.length > 0 &&
          categoryList.map((item, index) => (
            <div className="input-wrapper-item" key={index}>
              <input name="" type="checkbox" id={index + 1} />
              <label htmlFor={index + 1}>{item?.name}</label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductCategoriesListing