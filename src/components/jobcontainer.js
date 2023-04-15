import React, { useEffect } from "react";
import Job from "./job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import { getAlljobs } from "../featureuser/alljob/alljobslice";
import Pagebtn from "./pagebtncomponent";

const JobContainer = () => {
  const {
    jobs,
    isloading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchstatus,
    searchtype,
    sort,
    sortoptions
  } = useSelector((store) => store.alljobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlljobs());
  }, [page, search, searchstatus, searchtype, sort,sortoptions]);
  if (isloading) {
    return <Loading />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs to display... </h2>
      </Wrapper>
    );
  }
  console.log(totalJobs);
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"}
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          console.log(job);
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <Pagebtn />}
    </Wrapper>
  );
};

export default JobContainer;
