import React, { useEffect, useState } from 'react';
import image from "../../assets/edit-icon.png";
import apiRequest from '../../Utility/apiRequest';
import { recipeUrl } from '../../Utility/endPoint';
import { Link } from 'react-router-dom';
import RecipesSearch from '../../Components/RecipesListing/RecipesSearch';
import RecipesFilter from '../../Components/RecipesListing/RecipesFilter';
import RecipesItemListing from '../../Components/RecipesListing/RecipesItemListing';
import Loader from '../Loader/Loader';
import PaginationRecipes from '../../Components/RecipesListing/PaginationRecipes';

function Recipes() {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeItem, setRecipeItem] = useState([]);
  const [viewChange, setViewChange] = useState(false);
  const [sortedRating, setSortedRating] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [querryRecipes, setQuerryRecipes] = useState("");
  const [debounce, setDebounce] = useState("");
  const [searchValue, setSearchValue] = useState("");


  const postPerRecipes = 15;  // How many recipe items are displayed per page

  // FETCH ALL RECIPES
  const fetchRecipeItem = async () => {
    setIsLoading(true);
    try {
      const skipRecipes = currentPage * postPerRecipes - postPerRecipes;
      const recipeItemListing = await apiRequest(
        `${recipeUrl.recipePoint}?limit=${postPerRecipes}&skip=${skipRecipes}`
      );
      setRecipeItem(recipeItemListing.recipes);
      setSortedRating(recipeItemListing.recipes);
      const totalRecipes = recipeItemListing.total;
      const recipesPerCount = Math.ceil(totalRecipes / postPerRecipes);
      setTotalPage(recipesPerCount);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeItem();
  }, [currentPage]);

  // VIEW CHANGE PRODUCT ITEM

  const gridViewChangeHandler = () => {
    setViewChange(false);
  };

  const rowViewChangeHandler = () => {
    setViewChange(true);
  };

  // SORT BY RATING

  const sortedRatingRecipes = (sortType) => {
    try {
      const sortingRecipes = [...recipeItem];

      if (sortType === "low") {
        sortingRecipes.sort((a, b) => a.rating - b.rating);
        console.log("Low");
      } else if (sortType === "high") {
        sortingRecipes.sort((a, b) => b.rating - a.rating);
        console.log("High");
      }
      setSortedRating(sortingRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  // DEFAULT SORTED PRODUCTS

  useEffect(() => {
    setSortedRating(recipeItem);
  }, [recipeItem]);

  // PREVIOUS RECIPES

  const PreviousRecipesHandler = () => {
    setIsLoading(true)
    try {
      setCurrentPage((prev) => Math.max(prev - 1, 1))
      
    } catch (error) {
      console.log(error);
      
    } finally{
      setIsLoading(false);
    }
  }

  const nextRecipesHandler = () => {
    setIsLoading(true);
    try {
      setCurrentPage((prev) => Math.max(prev + 1, 1));
      
    } catch (error) {
      console.log(error);
      
    } finally{
      setIsLoading(false);
    }
  }

  // SEARCH RECIPES BY DEBOUNCING METHOD

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(querryRecipes);
    }, 500);

    return () => clearTimeout(handler); // If someone does not wait 500ms means continuous type
  }, [querryRecipes]);

  const fetchSearchRecipes = async (query) => {
    try {
      const searchListRecipes = await apiRequest(
        `${recipeUrl.recipePoint}/search?q=${query}`
      );
      setRecipeItem(searchListRecipes.recipes);
      setSortedRating(searchListRecipes.recipes); // update sorted too
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (debounce.trim()) {
      fetchSearchRecipes(debounce);
    } else {
      fetchRecipeItem(); // fallback to normal recipe list when input is cleared
    }
  }, [debounce]);

  // AFTER CLICKING CROSS ICON RECIPES LISTING WILL LE DISPLAYED DEFAULT

  const crossIconRemove = async () => {
    setIsLoading(true)
    try {
      const defaultListing = await apiRequest(`${recipeUrl.recipePoint}`);
      setRecipeItem(defaultListing.recipes);
      setSortedRating(defaultListing.recipes);
      
    } catch (error) {
      console.log(error);   
    } finally{
      setIsLoading(false);
    }
    
  }

  useEffect(() => {
    crossIconRemove()
  }, [])

  const handleSearchChange = (value) => {
    setSearchValue(value);
    setQuerryRecipes(value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setQuerryRecipes("");
    crossIconRemove();
  };



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
                <RecipesSearch
                  searchValue={searchValue}
                  onSearchChange={handleSearchChange}
                  onClearSearch={handleClearSearch}
                />
                <RecipesFilter
                  gridViewChangeHandler={gridViewChangeHandler}
                  rowViewChangeHandler={rowViewChangeHandler}
                  sortedRatingRecipes={sortedRatingRecipes}
                />
                {isLoading ? (
                  <Loader />
                ) : (
                  <RecipesItemListing
                    recipeItem={sortedRating}
                    viewChange={viewChange}
                    prevPagination
                  />
                )}
                {/* <PaginationRecipes
                  PreviousRecipesHandler={PreviousRecipesHandler}
                  nextRecipesHandler={nextRecipesHandler}
                /> */}
                <div className="col-12">
                  <div className="product-pagination-btn">
                    <button
                      type="button"
                      className="btn"
                      onClick={PreviousRecipesHandler}
                      disabled={currentPage === 1}
                    >
                      «
                    </button>

                    <div className="paginatin-buttons">
                      {Array.from({ length: totalPage }, (_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`btn ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="btn"
                      onClick={nextRecipesHandler}
                      disabled={currentPage === totalPage}
                    >
                      »
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;