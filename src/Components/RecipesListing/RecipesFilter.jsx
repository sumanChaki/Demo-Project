import React from 'react'

function RecipesFilter() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-listing-heading">
          <h1 className="heading-h2">Recipes</h1>
          <div className="page-listing-filter">
            <div className="listing-filter">
              <select name="" id="">
                <option value="default">Sort by Price</option>
                <option value="low">Price: Low to high</option>
                <option value="high">Price: high to Low</option>
              </select>
            </div>
            <div className="page-listing-view">
              <div className="page-listing-item">
                <img src={""} alt="" />
              </div>

              <div className="page-listing-item">
                <img src={""} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipesFilter