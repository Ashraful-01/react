import React, { Component } from 'react';
import booklist from '../assets/books';
import BookList from './lists/BookList';
import NewBook from './representationalComponent/NewBook';
import { route } from 'react-router-dom';



class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: booklist

        }

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





    render() {

        const books = <BookList
            books={this.state.books}
            deleteBookState={this.deleteBookState}
            changeWithInputState={this.changeWithInputState}
        />

        return (
            <div className="App">
                <div className='nav-bar'>
                    <ul>
                        <li><a href="/">Home</a> </li>
                        <li><a href="/new-book">New Book</a></li>
                    </ul>
                </div>

                <route path="/" exact render={() => <h1>Home</h1>} />
                <route path="/new-book" exat render={() => <h1>New Book</h1>} />
            </div>
        );
    }
}



export default MainComponent;