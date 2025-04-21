import React, { useEffect, useState } from 'react';
import apiRequest from '../../Utility/apiRequest';
import { recipeUrl } from '../../Utility/endPoint';
import RecipesSearch from '../../Components/RecipesListing/RecipesSearch';
import RecipesFilter from '../../Components/RecipesListing/RecipesFilter';
import RecipesItemListing from '../../Components/RecipesListing/RecipesItemListing';
import Loader from '../Loader/Loader';

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
  const [tagsRecipes, setAllTagsRecipes] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectTagRecipes, setSelectTagRecipes] = useState([])


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
    setIsLoading(true)
    try {
      const searchListRecipes = await apiRequest(
        `${recipeUrl.recipePoint}/search?q=${query}`
      );
      setRecipeItem(searchListRecipes.recipes);
      setSortedRating(searchListRecipes.recipes); // update sorted too
    } catch (err) {
      console.error(err);
    } finally{
      setIsLoading(false)
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

  // GET ALL RECIPES TAGS

  const allRecipesTags = async () => {
    setIsLoading(true)
    try {
      const listingTags = await apiRequest(`${recipeUrl.recipePoint}/tags`);      
      setAllTagsRecipes(listingTags);
    } catch (error) {
      console.log(error);
      
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    allRecipesTags();
  }, [])

  // RECIPES LISTING DISPLAYS ACCORDING TO TAGS SELECTION

  const fetchRecipesByTag = async (tags) => {
    if (tags.length === 0) {
      fetchRecipeItem();
      return;
    }
    setIsLoading(true)

    try {
      const selectedRecipes = await Promise.all(
        tags.map((item) => apiRequest(`${recipeUrl.recipePoint}/tag/${item}`))
      );

      const allRecipes = selectedRecipes.flatMap((res) => res.recipes);

      setSelectTagRecipes(allRecipes);
      
    } catch (error) {
      console.log(error);
      
    } finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipesByTag(selectedTags);
  }, [selectedTags]);

  useEffect(() => {
    if (selectedTags) {
      setCurrentPage(1);
    }
  }, [selectedTags]);


const selectTags = (item) => {
  setSelectedTags((prevTag) =>
    prevTag.includes(item)
      ? prevTag.filter((tag) => tag !== item)
      : [...prevTag, item]
  ); 
}

  return (
    <section className="common-section recipes-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="listing-wrapper">
              <div className="listing-sidebar">
                <div className="sidebar-sticky">
                  <div className="sidebar-card categories-card">
                    <h4>Tags</h4>
                    <div className="input-wrapper">
                      {tagsRecipes?.length > 0 &&
                        tagsRecipes.map((item, index) => (
                          <div className="input-wrapper-item" key={index}>
                            <input
                              name=""
                              type="checkbox"
                              id={`checkbox-${index + 1}`}
                              checked={selectedTags.includes(item)}
                              onChange={() => selectTags(item)}
                            />
                            <label htmlFor={`checkbox-${index + 1}`}>
                              <span className="color-palate"></span>
                              {item}
                            </label>
                          </div>
                        ))}
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
                    recipeItem={selectedTags.length > 0 ? selectTagRecipes : sortedRating}
                    viewChange={viewChange}
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