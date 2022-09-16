import React, { Component } from 'react';
import Book from './Book';
import books from '../assets/books';




class MainComponent extends Component {

    state = {
        books: books,

        showBooks: true
    }

    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;

        this.setState({ books: books });
    }

    deleteBookState = index => {

        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };

    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks });
    }

    render() {
        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
        };

        //const booksState = this.state.books;
        let books = null;
        if (this.state.showBooks) {
            books = this.state.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.changeWithInputState(event, index)}
                    />
                );
            });
        }

        return (
            <div className="App">
                <h1 style={style}>Book List</h1>
                <button onClick={this.toggleBooks}>Toggle Books</button>
                {books}
            </div>
        );
    }
}















export default MainComponent;