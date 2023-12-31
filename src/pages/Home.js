import React from "react";

import WomanImg from "../img/home/woman.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/*text and img wrapper*/}
        <div className="flex flex-col justify-center">
          {/*text*/}
          <div
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 
        lg:w-auto z-10 lg:absolute flex flex-col
        justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              photograher <br /> & film maker
            </h1>
            <p
              className="text-[26px] lg:text-[36px] 
          font-primary mb-4 lg:mb-12"
            >
              Los Angles, USA
            </p>
            <Link to={'/contact'} className="btn mb-[30px]">hire me</Link>
          </div>
          {/*image*/}
          <div className="flex justify-end">
            <img src={WomanImg} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
