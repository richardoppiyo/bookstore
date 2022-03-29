import React from 'react';
import './Book.css';
import { v4 as uuidv4 } from 'uuid';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import InputBook from './InputBook';

const Book = () => {
  const books = useSelector((state) => state.book);
  console.log(books);

  return (
    <div className="books">
      <div className="booksList">
        <ul className="ul-books">
          {books.map((book) => (
            <div key={uuidv4} className="lesson-Panel">
              <span className="School-of">{book.category}</span>
              <li className="li-books">{book.title}</li>
              <div>
                <button type="button" className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
      {/* <AddBook /> */}
    </div>
  );
  // return (
  //   <div className="book">
  //     {[books].map((book) => (
  //       <>
  //         <div key={book.id} className="book-holder">
  //           <h2>hello</h2>
  //         </div>
  //         <button className="book-button" type="button">Delete</button>

  //       </>
  //     ))}
  //   </div>
  // );
};

// {books.map((book) => (
//   <div key={uuidv4} className="lesson-Panel">
//     <span className="School-of">{book.category}</span>
//     <li className="li-books">{book.title}</li>
//     <div>
// eslint-disable-next-line max-len
//       <button type="button" className="remove-btn" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
//     </div>
//   </div>
// ))}
// const Book = () => {
//   const books = useSelector((state) => state.book);
//   return (
//     <div className="book">
//       <div className="book-holder">
//         <h2>
//           Title:
//           {' '}
//           {books.title}
//         </h2>
//         <p>{books.author}</p>
//       </div>
//       <button className="book-button" type="button">Delete</button>
//     </div>
//   );
// };

// Book.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
// };

export default Book;
