import React, { Component } from 'react';
import BookList from './lists/BookList';
import booklist from '../assets/books';
import NewBook from './representationalComponent/NewBook';
import BookDetails from './representationalComponent/BookDetails';
import { Route, NavLink, Switch } from 'react-router-dom';





class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: booklist,
            selectedBok: null
        }
    }
    selectedBookHandler = bookId => {
        const book = this.state.books.filter(book =>
            book.id === bookId)[0];
        this.setState({
            selectedBook: book
        });
    }



    render() {
        const books = <BookList
            books={this.state.books}
            selectedBookHandler={this.selectedBookHandler}

        />


        return (

            <div className="App">

                <nav className="nav-bar">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact render={() => books} />
                    <Route path="/new-book" exact Component={NewBook} />
                    <Route path="/book:id" render={() => <BookDetails book={this.state.selectedBook} />} />
                </Switch>
            </div>

        );
    }
}



export default MainComponent;