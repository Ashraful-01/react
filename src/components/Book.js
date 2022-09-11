import React from 'react';
import '../Stylesheets/Book.css';

const Book = props => {
    return (
        <div className='Book'>
            <h3 onClick={props.change}>Book: {props.bookName} </h3>
            <h4>Writer: {props.Writer}</h4>


        </div>
    );
}



export default Book;


//styling Componenet
//PostCss
//TailwindCss