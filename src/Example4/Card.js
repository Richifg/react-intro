import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const Card = ({ id, title }) => {
  const [image, setImage] = useState('');

  useEffect(function() {
    const imageToLoad = new Image();
    imageToLoad.addEventListener('load', ({target}) => setImage(target.src));
    imageToLoad.src=`https://picsum.photos/id/${id}/200/160`;
  }, [id]);

  return (
    <article className="card__container">
      <div className="card__image-container">
        { image 
          ? <img src={image} alt="title" className="card__image" />
          : <Loader /> 
        }
      </div>
      <div className="card__body-container">
        <h2 className="card__title">{title}</h2>
      </div>
    </article>
  );
}

Card.defaultProps = {
  id: 237,
  title: 'Doggo',
}

export default Card;