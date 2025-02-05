import React from 'react'

function ReviewCard({ productDetails }) {
  return (
    <div>
      <div className="rating-review-wrapper">
        <div className="rating-header">
          <h3>Ratings & Reviews</h3>
          <button className="btn btn-white">Rate Product</button>
        </div>

        <div className="rating-wrapper">
          <div className="rating-count">
            <div className="rating-count-heading">{productDetails?.rating}</div>
            <div className="rating-text">168 Ratings & 17 Reviews</div>
          </div>
          <div className="rating-progress">progress will be shown here</div>
        </div>

        <div className="review-card-wrapper">
          {productDetails?.reviews?.length > 0 &&
            productDetails.reviews.map((item, index) => {
              const isDate = item.date;
              const formatDate = new Date(isDate).toLocaleDateString();
              console.log("formatDate", formatDate);
              return (
                <div className="review-card-item" id={index}>
                  <div className="review-card-heading">
                    <div className="review-card-rating">{item?.rating}</div>
                    <div className="review-card-title">{item?.comment}</div>
                  </div>
                  <div className="review-card-content">
                    <div className="review-author">
                      <span>Name: </span>
                      <span>{item?.reviewerName}</span>
                      <span>Email: </span>
                      <span>{item?.reviewerEmail}</span>
                    </div>
                    <div className="review-author">
                      <span>Date: {formatDate}</span>
                    </div>
                  </div>
                  <div className="review-card-share">
                    <div className="like">Like: 10</div>
                    <div className="dis-like">Dislike: 10</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard