import React from 'react';
import './Book.css';

const Book = () => (
  <>
    <div className="book">
      <div className="book-holder">
        <h2>The Book Title</h2>
        <p>Book Author</p>
      </div>
      <button className="book-button" type="button">Delete</button>
    </div>
  </>
);

export default Book;
