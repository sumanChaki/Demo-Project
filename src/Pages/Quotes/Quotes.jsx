import React from 'react'
import { Link } from 'react-router-dom';

function Quotes() {
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
                      <div className="input-wrapper-item">
                        <input name="" type="checkbox" id="" />
                        <label htmlFor="">
                          <span className="color-palate"></span>
                          name
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
                <div className="row">
                  <div className="col-12">
                    <div className="product-search-wrapper">
                      <input type="text" />
                      <img
                        src=""
                        className="product-cross-icon"
                        alt="Clear Search"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="page-listing-heading">
                      <h1 className="heading-h2">Quotes</h1>
                      <div className="page-listing-filter">
                        <div className="listing-filter">
                          <select name="" id="">
                            <option value="default">Sort by Rating</option>
                            <option value="low">Rating: High to Low</option>
                            <option value="high">Rating: Low to high</option>
                          </select>
                        </div>
                        <div className="page-listing-view">
                          <div className="page-listing-item">
                            <img src="" alt="grid-view" />
                          </div>

                          <div className="page-listing-item">
                            <img src="" alt="row-view" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="product-listing-wrapper">
                      <div className="product-listing-item">
                        <figure className="product-image">
                          <Link to="">
                            <img src="" alt={""} />
                          </Link>
                        </figure>
                        <div className="product-listing-info">
                          <h3>Title</h3>
                          <div className="description">
                            <h4>Instructions:</h4>
                            <p>Test</p>
                          </div>
                          <div className="description tags">
                            <h4>Tags:</h4>
                            <ul>
                              <li>name</li>
                            </ul>
                          </div>

                          <Link to="" className="btn">
                            More Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="product-pagination-btn">
                      <button type="button" className="btn">
                        «
                      </button>

                      <div className="paginatin-buttons">
                        <button className="btn">1</button>
                      </div>

                      <button type="button" className="btn">
                        »
                      </button>
                    </div>
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

export default Quotes