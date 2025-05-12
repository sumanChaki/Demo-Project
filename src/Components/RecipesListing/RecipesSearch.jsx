// RecipesSearch.jsx
import React from "react";
import crossIcon from "../../assets/search-cross.svg";

function RecipesSearch({ searchValue, onSearchChange, onClearSearch }) {
  return (
    <div className="row">
      <div className="col-12">
        <div
          className={`product-search-wrapper ${
            searchValue ? "appear-icon" : ""
          }`}
        >
          <input
            type="text"
            value={searchValue}
            placeholder="Search your products"
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <img
            src={crossIcon}
            className="product-cross-icon"
            onClick={onClearSearch}
            alt="Clear Search"
          />
        </div>
      </div>
    </div>
  );
}

export default RecipesSearch;
