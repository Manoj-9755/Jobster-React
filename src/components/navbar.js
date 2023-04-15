import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./logo";
import { useDispatch, useSelector } from "react-redux";
import { togglesidebar,logoutuser, clearStore } from "../featureuser/userslice";

const Navbar = () => {
    const [showloagout,setshowlogout]=useState(false)
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle=()=>{
    dispatch(togglesidebar())
  }
  const logout=()=>{
    dispatch(logoutuser('bahut bahut sukriya '))
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => toggle()}
        >
          {" "}
          {<FaAlignLeft />}
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setshowlogout(!showloagout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showloagout?'dropdown show-dropdown':'dropdown'}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(clearStore('Logging out...'))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
