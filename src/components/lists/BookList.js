import React, { Component } from 'react';
import Book from '../representationalComponent/Book';


class BookList extends Component {
    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        Writer={book.writer}
                        key={book.id}
                    />
                );
            })


        );
    }

}


export default BookList;