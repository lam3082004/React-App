import React from 'react'

const Book = ({ img, title, Mail, sdt }) => {
    //console.log(props);
    //const { img, title, Mail, sdt } = props.book;
    const onClickHandler = () => {
        alert("Bui tung lam");
    };

    return (
        <article className='book'>
            <img src={img} alt='' />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h5>{Mail}</h5>
            <h5>{sdt}</h5>
            <button type="button" onClick={onClickHandler}>
                example thoi
            </button>
        </article >
    );
}

export default Book