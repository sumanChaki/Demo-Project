import React from 'react'

function PostPagination() {
  return (
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
  );
}

export default PostPagination