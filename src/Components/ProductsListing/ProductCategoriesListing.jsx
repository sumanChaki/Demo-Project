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
        {categoryList?.length > 0 &&
          categoryList.map((item, index) => (
            <div className="input-wrapper-item" key={index}>
              <input
                name=""
                type="checkbox"
                id={`categories-${index}`}
                checked={selectCategory.includes(item.name)}
                onChange={() => checkboxCategoryItem(item.name)}
              />
              <label htmlFor={`categories-${index}`}>{item?.name}</label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductCategoriesListing