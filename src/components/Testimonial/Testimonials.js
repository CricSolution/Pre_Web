import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Quote from '../../assests/blockquote.svg';
import "./testimonials.css"
import review1 from "../../assests/Review/dumy.jfif"


const reviews = [
  {
    id: 1,
    image:review1,
    name: 'Arun Sharma',
    text: 'Taking Services from a long time and as an organizer its important for us to arrange everything on time in which Cricsolution making my life easier than before.',
  },
  {
    id: 2,
    image:review1,
    name: 'Nitesh Singh',
    text: 'Impressed with the quality of balls they provided, their products and services both are awesome and above expectations.',
  },
  {
    id: 3,
    image:review1,
    name: 'Ravishankar Reddy (Retailer)',
    text: 'Good Quality White and Red balls at cheaper prices.',
  },
  {
    id: 4,
    image:review1,
    name: 'Avinash Singh',
    text: 'The knowledge and skills their umpires hold is appreciateable also the regularity of umpires. They are really improving the quality of tournaments with proper dresses, timing and focussing on minute details. Keep it up Cricsolution.',
  },
  {
    id: 5,
    image:review1,
    name: 'Venky',
    text: "Cricsolution really help us in all perspective for playing as well as organizing, best service is that they always up for organizing new tournaments together and handle almost everything.",
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