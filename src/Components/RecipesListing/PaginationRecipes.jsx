import React from 'react'

function PaginationRecipes({
  PreviousRecipesHandler,
  nextRecipesHandler,

}) {
  return (
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
              className={`btn ${currentPage === index + 1 ? "active" : ""}`}
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
  );
}

export default PaginationRecipes