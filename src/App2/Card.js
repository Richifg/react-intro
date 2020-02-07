import React from 'react';

const Card = ({ id, title }) => (
  <article className="card__container">
    <div className="card__image-container">
      <img
        className="card__image"
        src={`https://picsum.photos/id/${id}/200/160`} 
        alt={title}
      />
    </div>
    <div className="card__body-container">
      <h2 className="card__title">{title}</h2>
    </div>
  </article>
)

Card.defaultProps = {
  id: 237,
  title: 'Doggo',
}

export default Card;