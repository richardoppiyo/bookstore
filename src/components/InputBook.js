import { React, useState } from 'react';
import './InputBook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBookApi } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('Book Title');
  const [author, setAuthor] = useState('Author');
  const [category, setCategory] = useState('category');

  const CATEGORIES = ['Economy', 'Action', 'Science Fiction'];
  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addNewBookApi(newBook));
  };
  return (
    <div className="inputdiv">
      <h2 className="textheading">ADD NEW BOOK</h2>
      <form
        className="form-container"
        onSubmit={submitBookToStore}
      >
        <input
          type="text"
          className="input-title"
          placeholder={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="input-title"
          placeholder={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          required
          className="input-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className="input-submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
