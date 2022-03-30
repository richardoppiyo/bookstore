import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import './Book.css';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.categ);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <button className="book-button" type="button" onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
      <p>{status}</p>
    </div>
  );
}

export default Categories;
