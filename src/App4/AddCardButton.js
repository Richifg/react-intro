import React, { useState } from 'react';

const AddCardButton = ({ addCard }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [imageId, setImageId] = useState('');
  const [cardTitle, setCardTitle] = useState('');

  const onCloseCard = () => {
    setImageId('');
    setCardTitle('');
    setIsAdding(false);
  }

  const onAddCard = () => {
    addCard({id: imageId, title: cardTitle })
    onCloseCard();
  }

  return (
    <div className="add-button__container">
      { !isAdding ? (
        <img 
          src="https://lh3.googleusercontent.com/proxy/1-41wFvuw2vjDoT2zHlO7GLvCDNXCijMtmptOTLa99mrvtL7HzaCkxrHhizHLcKqbdxrFF3O2B_mRMArJfwEjnhCO02Hl8M"
          className="add-button__symbol"
          alt="plus"
          onClick={() => setIsAdding(true)}
        />
      ) : (
        <>
          <input 
            className="add-button__input" 
            type="text" 
            placeholder="Image ID"
            value={imageId}
            onChange={({ target }) => setImageId(target.value)}
          />
          <input 
            className="add-button__input" 
            type="text" 
            placeholder="Title" 
            value={cardTitle}
            onChange={({target}) => setCardTitle(target.value)}
          />
          <button 
            className="add-button__input add-button__input--add" 
            type="button"
            onClick={onAddCard}
          >
            Add Card
          </button>
          <button 
            className="add-button__input add-button__input--cancel" 
            type="button"
            onClick={onCloseCard}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default AddCardButton;