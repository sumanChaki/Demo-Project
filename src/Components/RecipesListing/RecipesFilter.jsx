import React from 'react';
import grid from "../../assets/grid-view-icon.svg";
import listView from "../../assets/list-view-icon-active.svg";

function RecipesFilter({
  gridViewChangeHandler,
  rowViewChangeHandler,
  sortedRatingRecipes
}) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-listing-heading">
          <h1 className="heading-h2">Recipes</h1>
          <div className="page-listing-filter">
            <div className="listing-filter">
              <select
                onChange={(event) => {
                  console.log("Selected Sort Type: ", event.target.value);
                  sortedRatingRecipes(event.target.value);
                }}
              >
                <option value="default">Sort by Rating</option>
                <option value="high">Rating: High to Low</option>
                <option value="low">Rating: Low to High</option>
              </select>
            </div>
            <div className="page-listing-view">
              <div
                className="page-listing-item"
                onClick={gridViewChangeHandler}
              >
                <img src={grid} alt="grid-view" />
              </div>

              <div className="page-listing-item" onClick={rowViewChangeHandler}>
                <img src={listView} alt="row-view" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipesFilter