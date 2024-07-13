import React from 'react'
import "./card.css";
function Card() {
  return (
    <>
     <div className="containerr">
        <div className="card__container">
          <article className="card__article">
            <img src="assets/img/landscape-1.png" alt="image" className="card__img" />
            <div className="card__data">
              <span className="card__description">Vancouver Mountains, Canada</span>
              <h2 className="card__title">The Great Path</h2>
              <a href="#" className="card__button">Read More</a>
            </div>
          </article>
          <article className="card__article">
            <img src="assets/img/landscape-2.png" alt="image" className="card__img" />
            <div className="card__data">
              <span className="card__description">Poon Hill, Nepal</span>
              <h2 className="card__title">Starry Night</h2>
              <a href="#" className="card__button">Read More</a>
            </div>
          </article>
          <article className="card__article">
            <img src="assets/img/landscape-3.png" alt="image" className="card__img" />
            <div className="card__data">
              <span className="card__description">Bojcin Forest, Serbia</span>
              <h2 className="card__title">Path Of Peace</h2>
              <a href="#" className="card__button">Read More</a>
            </div>
          </article>
        </div>
      </div></>
  )
}

export default Card