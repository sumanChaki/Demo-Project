import React, { useState } from 'react'

function ProductCategoriesListing({
  categoryList,
  checkboxCategoryItem,
  selectCategory,
}) {
  return (
    <div className="sidebar-card categories-card">
      <h4>Categories</h4>
      <div className="input-wrapper">
        {categoryList && categoryList.length > 0 ? (
          categoryList.map((category, index) => (
            <div className="input-wrapper-item" key={index}>
              <input
                type="checkbox"
                id={`category-${index}`}
                checked={selectCategory.includes(category)}
                onChange={() => checkboxCategoryItem(category)}
              />
              <label htmlFor={`category-${index}`}>{category}</label>
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
}

export default ProductCategoriesListing