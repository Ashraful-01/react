import React from 'react';
import '../../Stylesheets/Book.css';

const Book = props => {
    return (
        <div className="Book">
            <h3 onClick={props.delete}>Book: {props.bookName} </h3>
            <h4>Writer: {props.Writer}</h4>
            <input type="text" onChange={props.inputName} value={props.bookName} />


        </div>
    );
}



export default Book;
