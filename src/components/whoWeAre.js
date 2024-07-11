import React from "react";
import "./WhoWeAre.css";
import whoImage from "../assests/who.jfif";
import fairImage from "../assests/fair.jpg";

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section text-white text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto side">
            <div className="whoblock">
              <div className="who">
                <img className="whoImage" src={whoImage} alt="Who We Are" />
              </div>
              <div className="who-d">
                <h1 className="m-4">Who We Are</h1>
                <p className="lead mb-5">
                  CricSolutions is a premier officiating organization based in
                  Bangalore, India. Our team of dedicated professionals is
                  committed to providing top-tier officiating services for
                  cricket matches. We staunchly uphold the values of fair play
                  and competition, ensuring every game we oversee is conducted
                  in a professional and unbiased manner.
                </p>
              </div>
            </div>
            <hr className="my-5 d-block d-lg-none" />
            <div className="fairplayblock">
              <div className="fairplay">
                <h2 className="mb-5">Ensuring Fair Play</h2>
                <p className="lead mb-5">
                  As a leading organization in the field, CricSolutions
                  provides comprehensive education, training, assessment, and
                  scheduling of officiating for cricket matches. We are driven
                  by our passion for promoting fair play, fostering healthy
                  competition, and enhancing the enjoyment of athletics for
                  players, fans, and participants alike. Our unwavering
                  commitment to excellence ensures we deliver the best
                  officiating services for every cricket match.
                </p>
              </div>
              <div className="who">
                <img className="whoImage" src={fairImage} alt="Ensuring Fair Play" style={{height:"200px" ,marginBottom:"15px",marginTop:"-10px"}}/>
              </div>
            </div>
          </div>
        </div>
        <a href="/about-us" className="btn btn-light btn-xl">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default WhoWeAre;
