import React from "react";

function Pagination({
  nextPageUrl,
  prevPageUrl,
  handleNextPage,
  handlePrevPage,
}) {
  return (
    <div className="pagination">
      <button
        className="prev-button"
        onClick={handlePrevPage}
        disabled={!prevPageUrl}
      >
        Previous
      </button>
      <button
        className="next-button"
        onClick={handleNextPage}
        disabled={!nextPageUrl}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
