import React from "react";
import main from "../assets/images/job.gif";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components/index";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job<span> Tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            similique at animi expedita atque reprehenderit architecto cum
            vitae! Harum tenetur deleniti possimus vel libero, accusantium ullam
            fuga obcaecati. Voluptatibus, consectetur?
          </p>
          <Link to={'/register'} className="btn btn-hero">Login/Signup</Link>
        </div>
        <img src={main} alt="JOB HUNT" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
