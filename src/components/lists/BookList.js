import React from 'react';
import Book from '../representationalComponent/Book';


const BookList = () => {
    return (
        this.state.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={() => this.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => this.changeWithInputState(event, index)}
                />
            );
        })


    );
}


export default BookList;