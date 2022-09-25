import React, { Component } from 'react';
import Book from '../representationalComponent/Book';
import { Link } from 'react-router-dom'


class BookList extends Component {
    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Link to={"/" + book.id} key={book.id}>
                        <Book
                            bookName={book.bookName}
                            Writer={book.writer}
                            selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
                        />
                    </Link>
                );
            })


        );
    }

}


export default BookList;