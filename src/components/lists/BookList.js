import React, { Component } from 'react';
import Book from '../representationalComponent/Book';


class BookList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.books.map((book, index) => {
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
}


export default BookList;