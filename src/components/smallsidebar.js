import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./logo";
import { useDispatch, useSelector } from "react-redux";
import { togglesidebar } from "../featureuser/userslice";
import Navlink from "../pages/Dashboard/navlink";

const Smallsidebar = () => {
  const { issidebar } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(togglesidebar());
  };
  return (
    <Wrapper>
      <div
        className={
          issidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={() => toggle()}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
        <Navlink togglesidebar={toggle}/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Smallsidebar;
