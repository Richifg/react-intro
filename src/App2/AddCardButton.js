import React from 'react';

const AddCardButton = () => (
  <div className="add-button__container">
      <img 
        src="https://lh3.googleusercontent.com/proxy/1-41wFvuw2vjDoT2zHlO7GLvCDNXCijMtmptOTLa99mrvtL7HzaCkxrHhizHLcKqbdxrFF3O2B_mRMArJfwEjnhCO02Hl8M"
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