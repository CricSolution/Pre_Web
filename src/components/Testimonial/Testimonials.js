import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Quote from '../../assests/blockquote.svg';
import "./testimonials.css"
import review1 from "../../assests/Review/review1.jfif"
import review2 from "../../assests/Review/review2.jfif"
import review3 from "../../assests/Review/review3.jfif"
import review4 from "../../assests/Review/review4.jfif"

const reviews = [
  {
    id: 1,
    image:review1,
    name: 'Akash',
    text: 'The team demonstrated a deep understanding of our requirements. They were able to capture the essence of our vision for the tournament and delivered an experience that exceeded our expectations',
  },
  {
    id: 2,
    image:review2,
    name: 'Punita',
    text: 'The attention to detail in managing our cricket event was impressive. Every aspect, from the scheduling to the execution, was handled with precision and care. I highly recommend their services. This was very well organized corporate event.',
  },
  {
    id: 3,
    image:review3,
    name: 'Raju',
    text: 'The umpire service was excellent. The umpires were highly responsive and fair, ensuring the matches were conducted smoothly and professionally.',
  },
  {
    id: 4,
    image:review4,
    name: 'Palak',
    text: 'I was extremely pleased with the quality of the cricket ground provided by your organization. The pitch was well-maintained and met all our standards, making it an ideal venue for our matches.',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Raj',
    text: "The product not only met but exceeded my expectations. It's clear that the team is dedicated to delivering high-quality work. I'm a satisfied customer.",
  },
];
const Testimonials = () => {
  return (
    <section className="testimonial-container">
      <div className="title">
        <h2>Testimonial</h2>
        <p>What members are saying.</p>
      </div>

      <div className="slider-container">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;