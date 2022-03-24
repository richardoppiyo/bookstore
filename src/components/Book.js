import React from 'react';
import './Book.css';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book">
      <div className="book-holder">
        <h2>
          {title}
        </h2>
        <p>{author}</p>
      </div>
      <button className="book-button" type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
