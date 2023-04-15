import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useDispatch, useSelector } from "react-redux";
import { changepage } from "../featureuser/alljob/alljobslice";

const Pagebtn = () => {
  const { numOfPages, page } = useSelector((store) => store.alljobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  console.log(pages);
  const nextpage = () => {
    let newpage = page + 1;
    if(newpage>numOfPages){
        newpage=1
    }
    dispatch(changepage(newpage));
  };
  const prevpage = () => {
    let newpage = page - 1;
    if(newpage<1){
        newpage=numOfPages
    }
    dispatch(changepage(newpage));
  };
  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={prevpage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pagenumber) => {
          return (
            <button
              className={pagenumber === page ? "pageBtn active" : "pageBtn"}
              type="button"
              key={pagenumber}
              onClick={() => dispatch(changepage(pagenumber))}
            >
              {pagenumber}
            </button>
          );
        })}
      </div>

      <button type="button" className="next-btn" onClick={nextpage}>
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};

export default Pagebtn;
