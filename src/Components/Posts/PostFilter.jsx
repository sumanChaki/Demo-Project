import React from 'react'
import gridView from "../../assets/grid-view-icon.svg";
import rowView from "../../assets/list-view-icon-active.svg";

function PostFilter({ gridViewChangeHandler, rowViewChangeHandler }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-listing-heading">
          <h1 className="heading-h2">Posts</h1>
          <div className="page-listing-filter">
            <div className="listing-filter">
              <select name="" id="">
                <option value="default">Sort by Rating</option>
                <option value="low">Rating: High to Low</option>
                <option value="high">Rating: Low to high</option>
              </select>
            </div>
            <div className="page-listing-view">
              <div
                className="page-listing-item"
                onClick={gridViewChangeHandler}
              >
                <img src={gridView} alt="grid-view" />
              </div>

              <div className="page-listing-item" onClick={rowViewChangeHandler}>
                <img src={rowView} alt="row-view" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostFilter