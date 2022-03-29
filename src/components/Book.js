import React from 'react';
import './Book.css';
// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

const Book = () => {
  // const { title, author } = props;
  const title = useSelector((state) => state.book.title);
  const author = useSelector((state) => state.book.author);
  return (
    <div className="book">
      <div className="book-holder">
        <h2>
          Title:
          {' '}
          {title}
        </h2>
        <p>{author}</p>
      </div>
      <button className="book-button" type="button">Delete</button>
    </div>
  );
};

// Book.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
// };

export default Book;
