import React, { useEffect } from 'react';
// import { faBlog } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBookApi, displayBooks } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  // const percentage = 66;

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  return (
    <div className="topdiv">
      {books.map((book) => (
        <React.Fragment key={book.item_id}>
          <div className="innerdiv">
            <div className="book">
              <div className="book-holder">
                <p className="category">{book.category}</p>
                <h2 className="title">{book.title}</h2>
                <p className="author">{book.author}</p>
              </div>
              <ul className="middle-box">
                <Link to="/" className="link-items">Comments</Link>
                <Link to="/" className="link-items" onClick={() => dispatch(deleteBookApi(book.item_id))}>Remove</Link>
                <Link to="/" className="link-item3">Edit</Link>
              </ul>
            </div>
            <div className="stat">
              <div style={{ width: 40, height: 40 }}>
                <CircularProgressbar value={66} />
              </div>
              <div>
                <p>64%</p>
                <h5>Progress</h5>
              </div>
            </div>
            <div className="moreinfo">
              <h5>Current Chapter</h5>
              <p>Chapter 17</p>
              <button className="book-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Book;
