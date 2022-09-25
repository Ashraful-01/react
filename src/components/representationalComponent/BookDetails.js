import React from 'react';


const BookDetails = props => {
    return (
        <div>
            <h1>{props.book.bookName}</h1>
            <h3>{props.book.writer}</h3>
            <p>{props.book.description}</p>
        </div>
    );
}


export default BookDetails;