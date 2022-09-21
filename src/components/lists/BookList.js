import React, { Component } from 'react';
import Book from '../representationalComponent/Book';


const BookList = props => {

    return (
        props.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    Writer={book.writer}
                    delete={() => this.props.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => this.props.changeWithInputState(event, index)}
                />
            );
        })


    );
}


export default BookList;