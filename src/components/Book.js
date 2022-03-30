import React from 'react';
import './Book.css';
// import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  return (
    <>
      {books.map((book) => (
        <>
          <div key={book.id} className="book">
            <div key={book.id} className="book-holder">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </div>
            <button className="book-button" type="button" onClick={() => dispatch(remove(book.id))}>Delete</button>
          </div>
        </>
      ))}
    </>
  );
};

export default Book;
