import React, { useEffect } from 'react';
import './Book.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBookApi, displayBooks } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  return (
    <div className="topdiv">
      {books.map((book) => (
        <React.Fragment key={book.item_id}>
          <div className="book">
            <div className="book-holder">
              <p className="category">{book.category}</p>
              <h2 className="title">{book.title}</h2>
              <p className="author">{book.author}</p>
            </div>
            <div>
              <button className="book-button" type="button" onClick={() => dispatch(deleteBookApi(book.item_id))}>REMOVE</button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Book;
