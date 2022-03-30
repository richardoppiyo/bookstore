import React from 'react';
import './Book.css';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  return (
    <>
      {books.map((book) => (
        <React.Fragment key={book.id}>
          <div className="book">
            <div className="book-holder">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </div>
            <button className="book-button" type="button" onClick={() => dispatch(remove(book.id))}>Delete</button>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Book;
