import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import { lam } from './books'
import Book from './Book'
//setup varsl

function Booklist() {
   return (
      <>
         <img src="lam.png" />
         <section className="Booklist">
            {
               lam.map((book, index) => {
                  return <Book book={book.id} {...book}></Book>;
               }
               )
            }
         </section>
      </>
   );
}





ReactDom.render(<Booklist />, document.getElementById('root'));