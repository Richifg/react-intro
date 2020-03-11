import React from 'react';

const Card = () => (
  <article className="card__container">
    <div className="card__image-container">
      <img 
        className="card__image" 
        src="https://picsum.photos/id/237/200/160" 
        alt="doggo"
      />
    </div>
    <div className="card__body-container">
      <h2 className="card__title">Doggo</h2>
    </div>
  </article>
)

export default Card;