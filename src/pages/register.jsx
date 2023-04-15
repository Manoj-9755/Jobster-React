import React, { useEffect, useState } from "react";
import { Logo, Formrow } from "../components/index";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginuser, registeruser } from "../featureuser/userslice";
import { useNavigate } from "react-router-dom";
const initialstate = {
  name: "",
  email: "",
  password: "",
  ismember: true,
};

const Register = () => {
  const [values, setvalues] = useState(initialstate);
  const { user, isloading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  const dispatch = useDispatch();
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
    setvalues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, ismember } = values;
    if (!email || !password || (ismember && !name)) {
      toast.error("please fill out all fields");
      return;
    }
    if (ismember) {
      dispatch(registeruser({ name, email, password }));

      return;
    }
    dispatch(loginuser({ email: email, password: password }));

    console.log(e.target);
  };
  const togglemember = () => {
    setvalues({ ...values, ismember: !values.ismember });
    console.log(setvalues);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{!values.ismember ? "login" : "register"}</h3>
        {values.ismember && (
          <Formrow
            type="text"
            name="name"
            value={values.name}
            handlechange={handlechange}
          />
        )}
        <Formrow
          type="email"
          name="email"
          value={values.email}
          handlechange={handlechange}
        />
        <Formrow
          type="password"
          name="password"
          value={values.password}
          handlechange={handlechange}
        />

        <button type="submit" className="btn btn-block" disabled={isloading}>
          {isloading ? "loading...." : "submit"}
        </button>

        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isloading}
          onClick={()=>{
            dispatch(loginuser({email:'testUser@test.com',password:'secret'}))}}
        >
          {isloading ? "loading...." : "demo app"}
        </button>
        <p>
          {values.ismember ? "already a member" : "not a member"}
          <button type="submit" onClick={togglemember} className="member-btn">
            {values.ismember ? "login" : "register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
