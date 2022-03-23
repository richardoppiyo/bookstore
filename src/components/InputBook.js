import React from 'react';
import './InputBook.css';

const InputBook = () => (
  <>
    <h2 className="textheading">ADD NEW BOOK</h2>
    <form className="form-container">
      <input
        type="text"
        className="input-title"
        placeholder="Title"
        name="title"
      />
      <input
        type="text"
        className="input-title"
        placeholder="Author"
        name="title"
      />
      <button type="button" className="input-submit">Submit</button>
    </form>
  </>
);

export default InputBook;
