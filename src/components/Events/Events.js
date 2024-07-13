import React, { useEffect, useState } from "react";
import "./event.css";
import img1 from "../../assests/gallery/image1.jpg";
import img2 from "../../assests/gallery/image2.jpg";
import img3 from "../../assests/gallery/image3.jpg";
import img4 from "../../assests/gallery/image4.jpg";
import img5 from "../../assests/gallery/image5.jpg";
import img6 from "../../assests/gallery/image6.jpg";
import img7 from "../../assests/gallery/image7.jpg";
import img8 from "../../assests/gallery/image8.jpg";
import img9 from "../../assests/gallery/image9.jpg";
import img10 from "../../assests/gallery/image10.jpg";
import img11 from "../../assests/gallery/image11.jpg";

const galleryImages = [
  { src: img1, title: "Image 2", description: "Description 2" },
  { src: img2, title: "Image 3", description: "Description 3" },
  { src: img3, title: "Image 4", description: "Description 4" },
  { src: img4, title: "Image 5", description: "Description 5" },
  { src: img5, title: "Image 6", description: "Description 6" },
  { src: img6, title: "Image 7", description: "Description 7" },
  { src: img7, title: "Image 8", description: "Description 8" },
  { src: img8, title: "Image 9", description: "Description 9" },
  { src: img9, title: "Image 10", description: "Description 10" },
  { src: img10, title: "Image 10", description: "Description 10" },
  { src: img11, title: "Image 10", description: "Description 10" },
];

function Events() {
  const fontStyle = {
    fontFamily: "'Cedarville Cursive', cursive",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize:70,
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [imagesToShow, setImagesToShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setImagesToShow(isMobile ? false: true);
  }, [isMobile]);
  return (
    <>
      <div className="event-section">
        <div className="text-column">
          <h1 className="mb-8" style={fontStyle}>
            The Achievers Gallery{" "}
          </h1>
        </div>
        <div className="gallery-column">
          <div className="gallery-grid">
            <div className="gallery-card gallery-card-1 animated-border">
              <img
                src={img1}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
            <div className="gallery-card gallery-card-2 animated-border">
              <img
                src={img2}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
            <div className="gallery-card gallery-card-3 animated-border">
              <img
                src={img3}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
            <div className="gallery-card gallery-card-4 animated-border">
              <img
                src={img4}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
            <div className="gallery-card gallery-card-5 animated-border">
              <img
                src={img5}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
           {imagesToShow&&<>
            <div className="gallery-card gallery-card-6 animated-border">
              <img
                src={img6}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
            <div className="gallery-card gallery-card-7 animated-border">
              <img
                src={img7}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
            <div className="gallery-card gallery-card-8 animated-border">
              <img
                src={img8}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
            <div className="gallery-card gallery-card-9 animated-border">
              <img
                src={img9}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
            <div className="gallery-card gallery-card-10 animated-border">
              <img
                src={img10}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div>
            <div className="gallery-card gallery-card-11 animated-border">
              <img
                src={img11}
                className="gallery-image"
                alt={galleryImages.title}
              />
              <div className="gallery-content"></div>
            </div></>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
