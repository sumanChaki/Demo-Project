import React, { useEffect, useState } from "react";
import { apiRequest } from "../../Utility/apiRequest";
import { url } from "../../Utility/endPoint";
import Loader from "../Loader/Loader";
import ProductsListing from "../../Components/ProductsListing/ProductsListing";
import ProductFilter from "../../Components/ProductsListing/ProductFilter";
import ProductSearch from "../../Components/ProductsListing/ProductSearch";
import ProductViewChange from "../../Components/ProductsListing/ProductViewChange";
import { useNavigate } from "react-router-dom";

function Products() {
  const [myProducts, setMyProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewChange, setViewChange] = useState(true);
  const [sortedProduct, setSortedProduct] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);



  const navigate = useNavigate();
  const postPerPage = 50;

  // FETCH ALL PRODUCTS AND LIMITS

  const fetchAllProducts = async () => {
    setIsLoading(true);
    const skipProduct = currentPage * postPerPage - postPerPage;
    try {
      const allProducts = await apiRequest(
        `${url.productUrl}?limit=${postPerPage}&skip=${skipProduct}`
      );
      setMyProducts(allProducts.products);
      setSortedProduct(allProducts.products);
      const totalProducts = allProducts.total;
      const totalPageCount = Math.ceil(totalProducts / postPerPage);
      setTotalPage(totalPageCount);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, [currentPage]);

  // DEFAULT SORTING PRODUCTS

  useEffect(() => {
    setSortedProduct(myProducts);
  }, [myProducts]);

  // PRODUCT VIEW CHANGE

  const listViewChangeHandler = () => {
    setViewChange(false);
  };

  const gridViewChangeHandler = () => {
    setViewChange(true);
  };

  // ON DROPDOWN CHANGE PRICE SORTING PRODUCTS

  const priceSorted = (sortType) => {
    try {
      let sortingProductPrice = [...myProducts];

      if (sortType === "low") {
        sortingProductPrice.sort((a, b) => a.price - b.price);
      } else if (sortType === "high") {
        sortingProductPrice.sort((a, b) => b.price - a.price);
      }

      setSortedProduct(sortingProductPrice);
    } catch (error) {
      console.error("Error in priceSorted:", error);
    }
  };

  // DEFAULT PAGE URL SETUP

  useEffect(() => {
    navigate(`/products?page=${currentPage}`);
  }, [currentPage]);

  //  DATA CHANGE BY CLICKING PREVIOUS BUTTON

  const previousChangeHandler = () => {
    try {
      setIsLoading(true);
      setCurrentPage((prev) => prev - 1);
    } catch (error) {
      console.error("Error in previousChangeHandler:", error);
    }
  };

  //  DATA CHANGE BY CLICKING NEXT BUTTON

  const nextChangeHandler = () => {
    try {
      setIsLoading(true);
      setCurrentPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error in nextChangeHandler:", error);
    }
  };

  // SEARCH FILTER
  const searchOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  const searchByProduct = async (query) => {
    const searchProduct = await apiRequest(
      url.productUrl + `/search?q=${query}`
    );

    setTimeout(() => {
      setMyProducts(searchProduct.products);
      setIsLoading(false);
    }, 1000);
  };

  const searchSubmitHandler = () => {
    searchByProduct(searchValue);
  };

  // ON CLICK SEARCH ICON SEARCH DATA WILL BE REMOVED

  const searchDataRemove = () => {
    setSearchValue("");
  };

  // CATEGORIES LISTING DISPLAYS

  const categoriesListing = async () => {
    const listingCategories = await apiRequest(url.productUrl + "/categories");
    console.log("listingCategories >>", listingCategories);

    setCategoryList(listingCategories);
  };

  useEffect(() => {
    categoriesListing();
  }, []);

  

  // ON CHECKED CATEGORIES PRODUCT DISPLAYS THROUGH API

  // const handleCheckboxChange = (categoriesName) => {
  //   setSelectCategories(prev => {
  //     if(prev.includes(categoriesName)){
  //       return prev.filter((item) => item !== categoriesName); // Uncheck
  //     } else {
  //       return [...prev, categoriesName]; // checked
  //     }
  //   })
  //   console.log("categoriesName >>>", categoriesName);
  // }

  // const filteredCategoriesItem = async () => {
  //   if (selectCategories.length === 0) {
  //     setMyProducts([]);
  //     return; // Stop execution if no category is selected
  //   }

  //   setIsLoading(true);
  //   try {
  //     const productsArray = await Promise.all(
  //       selectCategories.map(async (category) => {
  //         const response = await apiRequest(
  //           `${url.productUrl}/category/${category}`
  //         );
  //         return response.products; // Extract the products array
  //       })
  //     );

  //     // Flatten the array (since each API call returns an array of products)
  //     setMyProducts(productsArray.flat());
  //   } catch (error) {
  //     console.log("Error fetching categories:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   filteredCategoriesItem();
  // }, [selectCategories]);

  const checkboxCategoryItem = (category) => {
    setSelectCategory((prev) => {
      if(prev.includes(category)) {
        return prev.filter(item => item !== category) // unchecked category
      } else {
        return [...prev, category]; // checked category
      }
    })
    console.log("category >>>", category);
    
  }

  const fetchCategoryProduct = async() => {
    if(selectCategory.length === 0){
      setMyProducts([]);
      return; // Stop execution if no category is selected
    }

    setIsLoading(true)

    try {
      const selectcategoryProduct = await Promise.all(
        selectCategory.map(async (categoryName) => {
          const productResponse = await apiRequest(  // API is calling based on selected category
            `${url.productUrl}/category/${categoryName}`
          );
          return productResponse.products; // Extract the products array
        })
      );
      // Flatten the array (since each API call returns an array of products)
      setMyProducts(selectcategoryProduct.flat());
    } catch (error) {
      console.log("No product found");
      
    } finally{
      setIsLoading(false);
    }

  }

  useEffect(() => {
    fetchCategoryProduct();
  }, [selectCategory]);


  return (
    <div className="container-fluid p-0">
      <div className="listing-wrapper">
        <ProductFilter
          categoryList={categoryList}
          checkboxCategoryItem={checkboxCategoryItem}
          selectCategory={selectCategory}
        />

        <div className="listing-article">
          <ProductSearch
            searchOnChange={searchOnChange}
            searchSubmitHandler={searchSubmitHandler}
            searchValue={searchValue}
            searchDataRemove={searchDataRemove}
          />

          <ProductViewChange
            listViewChangeHandler={listViewChangeHandler}
            gridViewChangeHandler={gridViewChangeHandler}
            priceSorted={priceSorted}
          />

          <div className="row">
            <div className="col-12">
              {isLoading ? (
                <Loader />
              ) : (
                <ProductsListing
                  myProducts={sortedProduct}
                  viewChange={viewChange}
                />
              )}
            </div>
            <div className="col-12">
              <div className="product-pagination-btn">
                <button
                  type="button"
                  className="btn"
                  disabled={currentPage === 1}
                  onClick={previousChangeHandler}
                >
                  Previous
                </button>

                <button
                  type="button"
                  className="btn"
                  onClick={nextChangeHandler}
                  disabled={currentPage === totalPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
