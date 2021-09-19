import React, { useState } from "react";

const Pagination = ({
  post,
  postperpage,
  paginate,
  currentpage,
  setCurrentpage,
  setPostPerPage,
}) => {
  // limit pagenumber on frontend
  const [pagenolimit, setPageNoLimit] = useState(5);
  // pageno.limit how much page display like now 5 page display
  const [maxpagenolimit, setMaxPageNoLimit] = useState(5);
  // maxpageno. limit like 0-5 ---5 is maxpagenolimit and 0 is minpagenolimit
  const [minpagenolimit, setMinPageNoLimit] = useState(0);

  // display pages as per the number of post and postper page
  const pages = [];
  for (let i = 1; i <= Math.ceil(post.length / postperpage); i++) {
    pages.push(i);
  }

  // function when click on next button
  const goNext = () => {
    if (currentpage !== pages[pages.length - 1]) {
      setCurrentpage(currentpage + 1);
      // for change maxpagelimit  and minpagelimit as per next  button
      if (currentpage + 1 > maxpagenolimit) {
        setMaxPageNoLimit(maxpagenolimit + pagenolimit);
        setMinPageNoLimit(minpagenolimit + pagenolimit);
      }
    }
  };
  // function when click on previous button
  const goPrevious = () => {
    if (currentpage > 1) {
      setCurrentpage(currentpage - 1);
      // for change maxpagelimit  and minpagelimit as per previous button
      // %(modulus/remainder) 10%5= 0(remainder) and  10/5= 2(Quotient)
      if ((currentpage - 1) % pagenolimit == 0) {
        setMaxPageNoLimit(maxpagenolimit - pagenolimit);
        setMinPageNoLimit(minpagenolimit - pagenolimit);
      }
    }
  };

  // add ... for so user know more pages left and
  let pageIncrementBtn = null;
  if (pages.length > maxpagenolimit) {
    pageIncrementBtn = <li onClick={goNext}> &hellip;</li>;
  }

  let pageDecrementBtn = null;
  if (minpagenolimit >= 1) {
    pageDecrementBtn = <li onClick={goPrevious}> &hellip;</li>;
  }

  // for load more
  const handleLoadMore = () => {
    setPostPerPage(postperpage + 10);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" onClick={goPrevious}>
          <a class="page-link">Previous</a>
        </li>
        {pageDecrementBtn}

        {pages.map((val) => {
          if (val < maxpagenolimit + 1 && val > minpagenolimit) {
            return (
              <li
                key={val}
                class={`page-item ${currentpage === val ? "active" : ""}`}
              >
                <a onClick={() => paginate(val)} class="page-link" href="#">
                  {val}
                </a>
              </li>
            );
          } else {
            return null;
          }
        })}
        {pageIncrementBtn}

        <li class="page-item" onClick={goNext}>
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
      <button
        onClick={handleLoadMore}
        style={{ textAlign: "center", backgroundColor: "yellow" }}
      >
        Load More
      </button>
    </nav>
  );
};

export default Pagination;
