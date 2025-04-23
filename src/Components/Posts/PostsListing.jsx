import React from 'react'
import { Link } from 'react-router-dom';

function PostsListing({ postList }) {
  console.log("postList >>", postList);
  
  return (
    <div className="row">
      <div className="col-12">
        <div className="product-listing-wrapper">
          {postList?.length > 0 &&
            postList?.map(({ id, title, body, tags }) => (
              <div className="product-listing-item" key={id}>
                {/* <figure className="product-image">
                  <Link to="">
                    <img src="" alt={""} />
                  </Link>
                </figure> */}
                <div className="product-listing-info">
                  {title && <h3>{title}</h3>}

                  {body && (
                    <div className="description">
                      <p>{body}</p>
                    </div>
                  )}

                  {tags && (
                    <div className="description tags">
                      <h4>Tags:</h4>
                      <ul>
                        {tags?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link to={`/posts/${id}`} className="btn">
                    More Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PostsListing