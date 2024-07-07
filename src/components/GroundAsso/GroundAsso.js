import React from "react";
import Slider from "react-slick";
import g1 from "../../assests/bkground.jfif"
import g2 from "../../assests/eagleground.jfif"
import g5 from "../../assests/nammaground.jfif"
import g6 from "../../assests/nexusground.jfif"
import g7 from "../../assests/SGCG.jpg"
import g9 from "../../assests/vssground.jpg"
import g10 from "../../assests/titang.jpg"
import "./GroundAsso.css"; // Import CSS

function GroundAsso() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="services-header">
        <h1>Ground Associated</h1>
      </div>
      <div className="parent-service">
        <Slider {...settings}>
          {[
            { img: g1, title: "BK Cricket Grounds", text: "Top-Class Facilities" },
            { img: g6, title: "Nexus Cricket Arena", text: "Modern Cricket Arena" },
            { img: g2, title: "Eagles’s Cricket Ground", text: "Scenic Cricket Venue" },
            { img: g7, title: "Sourav Ganguly Ground", text: "Premier Cricket Venue" },
            { img: g9, title: "VSS Cricket Ground", text: "Versatile Cricket Spot" },
            { img: g5, title: "Namma Cricket Ground", text: "Local Cricket Favorite" },
            { img: g10, title: "Titans Cricket Ground", text: "Dynamic Cricket Venue" },
          ].map((item, index) => (
            <div key={index} className="slider-item">
              <div className="card-container">
                <div className="card ground-card">
                  <img className="card-img-top ground-img" src={item.img} alt="Card cap" />
                  <div className="card-body card-service">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default GroundAsso;
