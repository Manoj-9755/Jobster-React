import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Jobinfo from "./jobinfo";
import moment from "moment";
import { deletejob, seteditjob } from "../featureuser/job/jobslice";
const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMMM D YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <Jobinfo icon={<FaLocationArrow />} text={jobLocation} />
          <Jobinfo icon={<FaCalendarAlt />} text={date} />
          <Jobinfo icon={<FaBriefcase />} text={jobType} />

          <div className={`status ${status}`}>
            {status}
            {console.log(jobLocation)}
          </div>
          <footer className="actions">
            <Link
              to="/add-jobs"
              className="btn edit-btn"
              onClick={() => dispatch(seteditjob({editJobId:_id,
              position,company,jobLocation,jobType,status
              }))}
            >
              Edit jobs
            </Link>
            <button
              className="btn delete-btn"
              onClick={() => dispatch(deletejob(_id))}
            >
              delete
            </button>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
};

export default Job;
