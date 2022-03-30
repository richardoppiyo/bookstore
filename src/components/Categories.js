import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import './Book.css';
// import { useDispatch } from 'react-redux';
// import { status } from '../redux/categories/categories';

import { checkStatus } from '../redux/categories/categories';

// const Categories = () => {
//   const status = useSelector((state) => state.categReducers);
//   const dispatch = useDispatch();
//     <>
//       <Header />
//       <button className="book-button" type="button" onClick={() =>
//  { dispatch(checkStatus()); }}>Check Status</button>
//       <p>{status}</p>
//     </>;
// };

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

// export default Categories;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { checkStatus } from '../redux/categories/categories';

// function Categories() {
//   const status = useSelector((state) => state.categoriesReducers);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <button type="button" onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
//       <p>{status}</p>
//     </div>
//   );
// }

export default Categories;
