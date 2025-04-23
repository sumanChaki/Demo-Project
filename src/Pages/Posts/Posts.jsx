import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { apiRequest } from '../../Utility/apiRequest';
import { postUrl } from '../../Utility/endPoint';
import PostsListing from '../../Components/Posts/PostsListing';
import PostSearch from '../../Components/Posts/PostSearch';
import PostFilter from '../../Components/Posts/PostFilter';
import PostPagination from '../../Components/Posts/PostPagination';
import Loader from '../Loader/Loader';


function Posts() {

  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  // FETCHING ALL LISTING POSTS

  const fetchPostListing = async() => {
    setIsLoading(true);

    try {
      const allPosting = await apiRequest(`${postUrl.postPoint}`);
      setPostList(allPosting.posts);      
      
    } catch (error) {
        setIsLoading(false);
    } finally{
        setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPostListing()
  }, [])

  // GRID VIEW AND ROW VIEW

  const gridViewChangeHandler = () => {}

  const rowViewChangeHandler = () => {}


  return (
    <section className="common-section recipes-section posts-section">
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
                <PostSearch />

                <PostFilter />

                {isLoading ? <Loader /> : <PostsListing postList={postList} />}

                <PostPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts