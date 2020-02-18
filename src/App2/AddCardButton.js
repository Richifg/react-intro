import React from 'react';

const AddCardButton = () => (
  <div className="add-button__container">
      <img 
        src="https://img.icons8.com/cotton/2x/plus--v1.png"
        className="add-button__symbol"
        alt="plus"
      />
      <input className="add-button__input" type="text" placeholder="Image ID"/>
      <input className="add-button__input" type="text" placeholder="Title" />
      <button className="add-button__input add-button__input--add" type="button">
        Add Card
      </button>
      <button className="add-button__input add-button__input--cancel" type="button">
        Cancel
      </button>
  </div>
)

export default AddCardButton;