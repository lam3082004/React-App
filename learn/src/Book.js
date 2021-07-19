import React from 'react'

const Book = ({ img, title, Mail, sdt, Job }) => {
    //console.log(props);
    //const { img, title, Mail, sdt } = props.book;

    return (
        <>
            <div>
                <article className='book'>
                    <img src={img} alt='' />
                    <h1 onClick={() => console.log(title)}>{title}</h1>
                    <h4>{Mail}</h4>
                    <h4>{Job}</h4>
                    <h4>{sdt}</h4>
                </article >
            </div>
        </>
    );
}

export default Book