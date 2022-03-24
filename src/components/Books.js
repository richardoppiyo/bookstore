import React from 'react';
import Header from './Header';
import Book from './Book';
import InputBook from './InputBook';

const Books = () => (
  <>
    <Header />
    <Book title="Half of a Yellow Sun" author="Chimamanda Adichie" />
    <InputBook />
  </>
);

export default Books;
