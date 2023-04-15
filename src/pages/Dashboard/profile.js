import React, { useState } from "react";
import { Formrow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../featureuser/userslice";

const Profile = () => {
  const { isloading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userdata, setuserdata] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastname: user?.lastName || "",
    location: user?.location || "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    const{name,email,lastname,location}=userdata
    if (!name || !email || !lastname || !location) {
      toast.error("please fill out all fields");
      return;
    }
    dispatch(updateUser(userdata))
  };
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserdata({ ...userdata, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handlesubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <Formrow
            type="text"
            name="name"
            value={userdata.name}
            handlechange={handlechange}
          />
            <Formrow
              type="text"
              labeltext='Last Name'
              name="lastname"
              value={userdata.lastname}
              handlechange={handlechange}
            />
          <Formrow
            type="email"
            name="email"
            value={userdata.email}
            handlechange={handlechange}
          />
          <Formrow
            type="text"
            name="location"
            value={userdata.location}
            handlechange={handlechange}
          />
          <button type="submit" className="btn btn-block" disabled={isloading}>
            {isloading?'please wait':'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
