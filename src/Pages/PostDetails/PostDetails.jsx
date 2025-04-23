import React from 'react'
import { useParams } from 'react-router-dom';

function PostDetails() {

  const { postId } = useParams();


  return (
    <div className="container">
      <h4>Product details page is {postId}</h4>
      <div className="product-details-content">Test</div>
    </div>
  );
}

export default PostDetails