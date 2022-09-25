import React, { Component } from 'react';
import BookList from './lists/BookList';
import booklist from '../assets/books';
import NewBook from './representationalComponent/NewBook';
import { Route, NavLink } from 'react-router-dom';





class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: booklist
        }
    }



    render() {
        const books = <BookList
            books={this.state.books}

        />


        return (

            <div className="App">

                <nav className="nav-bar">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>

                {books}
                <NewBook />

                <Route path="/" exact render={() => books} />
                <Route path="/new-book" exact render={NewBook} />


            </div>

        );
    }
}



export default MainComponent;