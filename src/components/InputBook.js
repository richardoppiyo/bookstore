import { React, useState } from 'react';
import './InputBook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
    };
    console.log(newBook);
    dispatch(add({ title: 'richard' }));
  };
  return (
    <>
      <h2 className="textheading">ADD NEW BOOK</h2>
      <form
        className="form-container"
        onSubmit={submitBookToStore}
      >
        <input
          type="text"
          className="input-title"
          placeholder="Title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="input-title"
          placeholder="Author"
          name="title"
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    </>
  );
};

export default InputBook;
