import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import './BlogCarousel.css'; 
import g1 from "../assests/bkground.jfif"
import g2 from "../assests/eagleground.jfif"
import g3 from "../assests/gssground.jpg"
import g4 from "../assests/hrground.jfif"
import g5 from "../assests/nammaground.jfif"
import g6 from "../assests/nexusground.jfif"
import g7 from "../assests/SGCG.jpg"
import g8 from "../assests/slsground.jpg"
import g9 from "../assests/vssground.jpg"
import g10 from "../assests/titang.jpg"
const blogPosts = [
  
  {
    id: 1,
    title: "Location - B.K. Cricket Ground",
    text: "Match Format: T-20",
    imgSrc: g1,
    date: "2024-03-01",
    team: "known for well-maintained pitches and a lush outfield."
  },
  {
    id: 2,
    title: "Location - Eagle Cricket Ground",
    text: "Match Format: T-30",
    imgSrc: g2,
    date: "2024-04-20",
    team: "modern facilities and a vibrant atmosphere."
  },
  {
    id: 3,
    title: "Location - GSS Cricket Ground",
    text: "Match Format: T-20",
    imgSrc: g3,
    date: "2024-05-30",
    team: "picturesque settings and top-notch amenities."
  },
  {
    id: 4,
    title: "Location - Hr Cricket Ground",
    text: "Match Format: T-30",
    imgSrc: g4,
    date: "2024-01-03",
    team: "renowned for hosting memorable matches."
  },
  {
    id: 5,
    title: "Location - Namma Cricket Ground",
    text: "Match Format: T-20",
    imgSrc: g5,
    date: "2024-03-02",
    team: "erene surroundings and well-maintained pitches."
  },
  {
    id: 6,
    title: "Location - Nexus Cricket Ground",
    text: "Match Format: T-20",
    imgSrc: g6,
    date: "2024-06-07",
    team: "a community-friendly hub for local tournaments."
  },
  {
    id: 7,
    title: "Location - SGCG Cricket Ground",
    text: "Match Format: T-20",
    imgSrc: g7,
    date: "2024-05-03",
    team: "known for professional-grade facilities."
  },
  {
    id: 8,
    title: "Location - SLS Cricket Ground",
    text: "Match Format: T-20",
    imgSrc: g8,
    date: "2024-06-03",
    team: "excellent amenities for matches and training."
  },
  {
    id: 9,
    title: "Location - VSS Cricket Ground",
    text: "Match Format: T-20",
    imgSrc: g9,
    date: "2024-05-05",
    team: "a dynamic venue promoting cricketing excellence."
  },
  {
    id: 10,
    title: "Location - Titan Cricket Ground",
    text: "Match Format: T-20",
    imgSrc: g10,
    date: "2024-04-01",
    team: "combines tradition with modern facilities for cricket enthusiasts."
  },
  // Add more blog posts as needed
];

const numItems = blogPosts.length;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: numItems >= 3 ? 3 : numItems,
    slidesToSlide: 2,
    partialVisibilityGutter: 30 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: numItems >= 2 ? 2 : numItems,
    slidesToSlide: 1,
    partialVisibilityGutter: 30 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30 
  }
};

const BlogCarousel = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blog/?id=${id}`);
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Recent Matches</h1>
      <Carousel 
        responsive={responsive} 
        className="carousel"
        arrows={true}
        showDots={true}
        dotListClass="custom-dot-list-style"
      >
        {blogPosts.map((post, index) => (
          <Card key={index} className="blog-card" style={{ width: '20rem' }} onClick={() => handleCardClick(post.id)}>           
           <Card.Img variant="top" src={post.imgSrc} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.text}</Card.Text>
              <Card.Text><small className="text-muted">{new Date(post.date).toDateString()}</small></Card.Text>
              <Card.Text>{post.team}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogCarousel;