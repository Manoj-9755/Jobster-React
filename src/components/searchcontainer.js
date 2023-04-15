import React from "react";

import { FormrowSelect } from "../pages/Dashboard/addjobs";
import { useDispatch, useSelector } from "react-redux";
import Formrow from "./formrow";
import Wrapper from "../assets/wrappers/SearchContainer";
import { clearfillter, handlechange } from "../featureuser/alljob/alljobslice";

const SearchContainer = () => {
  const { isloadinng, search, searchstatus, searchtype, sort, sortoptions } = useSelector(
    (store) => store.alljobs
  );
  const { jobtypeOptions, statusOptions } = useSelector((store) => store.job);

  const dispatch = useDispatch();
  const handlesearch = (e) => {
    if(isloadinng) return
     dispatch(handlechange({name:e.target.name,value:e.target.value}))
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(clearfillter())
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <Formrow
            type="text"
            name="search"
            value={search}
            handlechange={handlesearch}
          />
          <FormrowSelect
            labeltext="status"
            name="searchstatus"
            value={searchstatus}
            handlechange={handlesearch}
            list={["all", ...statusOptions]}
          />
          <FormrowSelect
            labeltext="type"
            name="jobstype"
            value={searchtype}
            handlechange={handlesearch}
            list={["all", ...jobtypeOptions]}
          />
          <FormrowSelect
            labeltext="sort"
            name="sort"
            value={sort}
            handlechange={handlesearch}
            list={sortoptions}
          />
          <button className="btn btn-block btn-danger" disabled={isloadinng} onClick={handlesubmit} > clear value</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
