import React from 'react';
import crossIcon from "../../assets/search-cross.svg";

function ProductSearch({
  searchOnChange,
  searchSubmitHandler,
  searchValue,
  searchDataRemove,
}) {
  return (
    <div className="row">
      <div className="col-12">
        <div
          className={`product-search-wrapper ${
            searchValue.length > 0 ? "appear-icon" : ""
          }`}
        >
          <input
            type="text"
            value={searchValue}
            onChange={searchOnChange}
          />
          <img
            src={crossIcon}
            className="product-cross-icon"
            onClick={searchDataRemove}
          />

          <button type="button" className="btn" onClick={searchSubmitHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch