import React, { useEffect } from "react";
import { Formrow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  clearvalues,
  createjob,
  handlechang,
  editjob,
} from "../../featureuser/job/jobslice";

const Addjobs = () => {
  const {
    isloading,
    position,
    company,
    joblocation,
    jobtype,
    jobtypeOptions,
    status,
    statusOptions,
    isediting,
    editjobid,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !joblocation) {
      toast.error("please fill out all fields");
    }
    if (isediting) {
      dispatch(
        editjob({
          jobId: editjobid,
          job: { position, company, joblocation, jobtype, status },
        })
      );
      return;
    }
    dispatch(createjob({ position, company, jobtype, joblocation, status }));
  };

  const handlejobinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handlechang({ name, value }));
  };
  useEffect(() => {
    if (!isediting) {
      dispatch(
        handlechang({
          name: "joblocation",
          value: user.location,
        })
      );
    }
  }, []);
  return (
    <Wrapper>
      <form className="form">
        <h3>{isediting ? "edit job" : "add job"}</h3>
        <div className="form-center">
          <Formrow
            type="text"
            name="position"
            value={position}
            handlechange={handlejobinput}
          />
          <Formrow
            type="text"
            name="company"
            value={company}
            handlechange={handlejobinput}
          />
          <Formrow
            type="text"
            labeltext="job location"
            name="joblocation"
            value={joblocation}
            handlechange={handlejobinput}
          />
          <FormrowSelect
            name="status"
            labeltext="status"
            value={status}
            list={statusOptions}
            handlechange={handlejobinput}
          />
          <FormrowSelect
            name="job type"
            labeltext="jobtype"
            value={jobtype}
            list={jobtypeOptions}
            handlechange={handlejobinput}
          />
          

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearvalues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block clear-btn"
              onClick={handlesubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default Addjobs;

export const FormrowSelect = ({
  labeltext,
  name,
  value,
  handlechange,
  list,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form=label">
        {labeltext || name}
      </label>
      <select
        name={name}
        value={value}
        id={name}
        onChange={handlechange}
        className="form-select"
      >
        {list?.map((itemvalue, i) => {
          return (
            <option key={i} value={itemvalue}>
              {itemvalue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
{
  /* <div className="form-row">
<label htmlFor="status" className="form-list">
  status
</label>
<select name="status" id="status" onChange={handlejobinput} className="form-input">
{statusoptions.map((itemvalue,i)=>{
  return <option key={i} value={itemvalue}>{itemvalue}</option>
})}
</select>

</div> */
}
