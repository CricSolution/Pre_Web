import React from "react";
import Slider from "react-slick";
import g5 from "../../assests/Tournament/Imperium.png";
import g6 from "../../assests/Tournament/Devilt.png";
import g7 from "../../assests/Tournament/Eid.png";
import g8 from "../../assests/Tournament/TriLigue.png";
import "./Turnaments.css"; // Import CSS


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none", // Hide by default
        marginRight: "5rem",
        background: "gray",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none", // Hide by default
        marginLeft: "5rem",
        background: "gray",
      }}
      onClick={onClick}
    />
  );
}

function Turnaments() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />, // Use default arrows for tablets and larger screens
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true, // Adjust height for smaller screens
          nextArrow: <SampleNextArrow display="block" />, // Show custom arrows for mobile
          prevArrow: <SamplePrevArrow display="block" />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true, // Adjust height for smallest screens
          nextArrow: <SampleNextArrow display="block" />, // Show custom arrows for smallest screens
          prevArrow: <SamplePrevArrow display="block" />,
        },
      },
    ],
  };

  return (
    <div className="turnaments-container">
      <h1 className="turnaments-heading">Tournaments Ongoing / Upcoming</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {[
            {
              img: g5,
              title: "The Imperium Cricket Tournament – 21nd July",
              description:
                "The Imperium Cricket Tournament is set to showcase the best cricket talent in the region, with teams battling it out for the ultimate prize.",
            },
            {
              img: g6,
              title: " The Devil’s League – 22nd June",
              description:
                "The Devil’s League features intense cricket battles with high-stakes competition, promising thrilling moments for fans.",
            },
            {
              img: g7,
              title: " The Tri League Eid – 10nd June",
              description:
                "The Eid League features intense cricket battles with high-stakes competition, promising thrilling moments for fans.",
            },
            {
              img: g8,
              title: " The Tri League – 2nd June",
              description:
                "The Tri’s League features intense cricket battles with high-stakes competition, promising thrilling moments for fans.",
            },
          ].map((item, index) => (
            <div key={index} className="slider-item">
              <div className="card mb-3 tournament-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.img}
                      className="img-fluid rounded-start tournament-img"
                      alt="Tournament"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <b>Intense Battles Under the Sun!</b>
                      <p className="card-text hidden-mobile">
                        {item.description}
                      </p>
                      <p className="card-text hidden-desktop">
                        {item.description}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Turnaments;
