import React, { useEffect, useState } from 'react';
import image from "../../assets/edit-icon.png";
import apiRequest from '../../Utility/apiRequest';
import { recipeUrl } from '../../Utility/endPoint';
import { Link } from 'react-router-dom';
import RecipesSearch from '../../Components/RecipesListing/RecipesSearch';
import RecipesFilter from '../../Components/RecipesListing/RecipesFilter';
import RecipesItemListing from '../../Components/RecipesListing/RecipesItemListing';

function Recipes() {
  const [recipes, setRecipes] = useState([])

  const fetchAllRecipes = async () => {
    const allRecipesList = await apiRequest(`${recipeUrl.recipePoint}`);
    setRecipes(allRecipesList.recipes);
    console.log(allRecipesList);
  }

  useEffect(() => {
    fetchAllRecipes()
  },[])


  return (
    <section className="common-section recipes-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="listing-wrapper">
              <div className="listing-sidebar">
                <div className="sidebar-sticky">
                  <div className="sidebar-card categories-card">
                    <h4>Categories</h4>
                    <div className="input-wrapper">
                      <div className="input-wrapper-item">
                        <input name="" type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox18">
                          <span className="color-palate"></span>Beige (60)
                        </label>
                      </div>
                      <div className="input-wrapper-item">
                        <input name="" type="checkbox" id="checkbox2" />
                        <label htmlFor="checkbox18">
                          <span className="color-palate"></span>Beige (60)
                        </label>
                      </div>
                      <div className="input-wrapper-item">
                        <input name="" type="checkbox" id="checkbox3" />
                        <label htmlFor="checkbox18">
                          <span className="color-palate"></span>Beige (60)
                        </label>
                      </div>
                      <div className="input-wrapper-item">
                        <input name="" type="checkbox" id="checkbox4" />
                        <label htmlFor="checkbox18">
                          <span className="color-palate"></span>Beige (60)
                        </label>
                      </div>
                      <div className="input-wrapper-item">
                        <input name="" type="checkbox" id="checkbox5" />
                        <label htmlFor="checkbox18">
                          <span className="color-palate"></span>Beige (60)
                        </label>
                      </div>
                    </div>
                  </div>

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

              <div className="listing-article">
                <RecipesSearch />
                <RecipesFilter />
                <RecipesItemListing />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;