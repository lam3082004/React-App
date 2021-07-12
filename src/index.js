import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//setup vars
const firstBook = {
   img: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/205919597_153167413470836_3271299122888783954_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=BpCN8NrQxTIAX8ATli4&tn=MJG99Eohf5AdkVKY&_nc_ht=scontent.fhan5-4.fna&oh=eac1aa4a51cf3f2403228277b9896bc1&oe=60F0C89A',
   title: 'Nguyễn Đức Toàn',
   Mail: 'Email: nguyenductoandhv@gmail.com',
   sdt: 'SĐT: 0983420518',
};
const secondBook = {
   img: 'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.15752-9/211153034_3989134464547911_9181122561502520993_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=qhBr-xgPPeoAX9nQOcD&tn=MJG99Eohf5AdkVKY&_nc_ht=scontent.fhan5-6.fna&oh=bae3f3c48dcc20868457ddcf959bae84&oe=60F1676D',
   title: 'Trần Mạnh Hùng',
   Mail: 'Email: hungtmtc@gmail.com',
   sdt: 'SĐT: 0912297937'
};

function Booklist() {
   return (
      <section className="booklist">
         <Book
            img={firstBook.img}
            title={firstBook.title}
            Mail={firstBook.Mail}
            sdt={firstBook.sdt}
         />
         <Book
            img={secondBook.img}
            title={secondBook.title}
            Mail={secondBook.Mail}
            sdt={secondBook.sdt}
         />
      </section>
   );
}


const Book = (props) => {
   return (
      <article className='book'>
         <img src={props.img} alt='' />
         <h1>{props.title}</h1>
         <p>{props.Mail}</p>
         <p>{props.sdt}</p>
      </article >
   );
}



ReactDom.render(<Booklist />, document.getElementById('root'));