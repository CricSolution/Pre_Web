import React from "react";
import Slider from "react-slick";
import "./service.css"
import service1 from "../../assests/service/blog.jpeg"
import service2 from "../../assests/service/groundAll.jpeg"
import service3 from "../../assests/service/live.jpeg"
import service4 from "../../assests/service/market.jpeg"
import service5 from "../../assests/service/matchManagement.jpeg"
import service6 from "../../assests/service/rent.jpeg"
import service7 from "../../assests/service/scoring.jpeg"
import service8 from "../../assests/service/teamg.jpeg"
import service9 from "../../assests/service/tournament.jpeg"
import service10 from "../../assests/service/traning.jpeg"
import service11 from "../../assests/service/umpire.jpeg"





function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "gray" }}
      onClick={onClick}
    />
  );
}



function Service() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div className="services-header" style={{marginTop:"2rem"
      }}>
        <h1>Our Services</h1>
      </div>
      <div className="parent-service" style={{margin:"2rem", display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
      <Slider {...settings}>
        <div>
        
          <div
            className="card"
            style={{ width: "19rem",height:"28rem" }}
          >
            <img className="card-img-top" src={service9} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title"> Tournament Management</h5>
              <p className="card-text">
              Organize and manage cricket events and tournaments.
              </p>
            </div>
          </div>
        </div>
        <div>
        <div
            className="card"
            style={{ width: "19rem",height:"28rem",textAlign:"center"}}
          >
            <img className="card-img-top" src={service11} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Umpires</h5>
              <p className="card-text">
              Provide certified umpires for fair play.
              </p>
            </div>
          </div>
        </div>
    <div>
        <div
            className="card"
            style={{ width: "19rem" ,height:"28rem"}}
          >
            <img className="card-img-top" src={service8} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Teams Gathering</h5>
              <p className="card-text">
              Facilitate team assembly for matches
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="card"
            style={{ width: "19rem",height:"28rem", textAlign:"center"}}
          >
            <img className="card-img-top" src={service2} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Ground Allotment</h5>
              <p className="card-text">
              Allocate and manage cricket grounds.
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="card"
            style={{ width: "19rem",height:"28rem", textAlign:"center"}}
          >
            <img className="card-img-top" src={service6} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Equipment on Rent</h5>
              <p className="card-text">
              Rent cricket equipment, from bats to protective gear.


              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="card"
            style={{ width: "19rem",height:"28rem", textAlign:"center"}}
          >
            <img className="card-img-top" src={service5} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Match Management</h5>
              <p className="card-text">
              Oversee match logistics and coordination.
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="card"
            style={{ width: "19rem",height:"28rem", textAlign:"center"}}
          >
            <img className="card-img-top" src={service7} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Scoring System</h5>
              <p className="card-text">
              Provide a system to track and record match statistics.
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="card"
            style={{ width: "19rem",height:"28rem", textAlign:"center"}}
          >
            <img className="card-img-top" src={service3} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Live Match Streaming</h5>
              <p className="card-text">
              Enable real-time streaming of matches.
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="card"
            style={{ width: "19rem",height:"28rem", textAlign:"center"}}
          >
            <img className="card-img-top" src={service4} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Marketplace</h5>
              <p className="card-text">
              Offer cricket gear and accessories.
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="card"
            style={{ width: "19rem",height:"28rem", textAlign:"center"}}
          >
            <img className="card-img-top" src={service10} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Training & Certification</h5>
              <p className="card-text">
              Provide training and certification for players, coaches, and umpires.
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="card"
            style={{ width: "19rem",height:"28rem", textAlign:"center"}}
          >
            <img className="card-img-top" src={service1} alt="Card image cap" />
            <div className="card-body card-service">
              <h5 className="card-title">Blogs and Community Forums</h5>
              <p className="card-text">
              Share cricket news and discussions through blogs and forums.
              </p>
            </div>
          </div>
        </div>
    
      </Slider>
      </div>
    </>
  );
}

export default Service;
