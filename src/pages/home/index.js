import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: "url(/images/login.jpg)"}}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h1 className="mb-1x">GELIAPP</h1>
                
                <p className="mb-1x">Our project is a mobile application that serves as a central platform for personal development, encompassing entrepreneurship and innovation programs, events, news, educational and informative videos, as well as podcasts for self-improvement during leisure time. This application will act as a shared resource for both program managers and partici pants, facilitating communication and providing access to vital information. It not only offers access to a select group of successful individuals in their respective fields but also allows users to explore the content they produce. With content from one of our country's leading companies, TIJSAS, we can enhance our personal development journey.</p>
                <div className="intro_btn-action pb-1" style={{marginTop: "50px"}}>


                  
                  <Link to="/about" className="text_2">
                    <div id="button_h" className="ac_btn btn ">
                      Details
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/video" className="text_2">
                    <div id="button_h" className="ac_btn btn ">
                      Video
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/poster" className="text_2">
                    <div id="button_h" className="ac_btn btn ">
                      Poster
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/source" className="text_2">
                    <div id="button_h" className="ac_btn btn ">
                      Source
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
