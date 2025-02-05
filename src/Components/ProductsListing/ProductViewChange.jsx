import React from 'react';
import grid from "../../assets/grid-view-icon.svg";
import listView from "../../assets/list-view-icon-active.svg";

function ProductViewChange({
  listViewChangeHandler,
  gridViewChangeHandler,
  priceSorted,
}) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-listing-heading">
          <h1 className="heading-h2">Listed Products</h1>
          <div className="page-listing-filter">
            <div className="listing-filter">
              <select
                name=""
                id=""
                onChange={(e) => priceSorted(e.target.value)}
              >
                <option value="default">Sort by Price</option>
                <option value="low">Price: Low to high</option>
                <option value="high">Price: high to Low</option>
              </select>
            </div>
            <div className="page-listing-view">
              <div
                className="page-listing-item"
                onClick={gridViewChangeHandler}
              >
                <img src={grid} alt="" />
              </div>

              <div
                className="page-listing-item"
                onClick={listViewChangeHandler}
              >
                <img src={listView} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductViewChange