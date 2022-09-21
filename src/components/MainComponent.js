import React, { Component } from 'react';
import booklist from '../assets/books';
import BookList from './lists/BookList';




class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: booklist,
            showBooks: true
        }
        console.log("MainComponent constructor!");
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
    componentDidMount() {
        console.log("MainComponent componentDidMount!");
    }

    shouldComponentUpdate(nextprops, nextState) {
        console.log("U mainCompoent shouldComponentUpdate", nextprops, nextState);
        return true;
    }
    componentDidUpdate() {
        console.log("u mainCompnent componentDidUpdate");
    }


    UNSAFE_componentWillMount() {
        console.log("MainCOmponent componentWillMount!");
    }


    UNSAFE_componentWillUpdate(nextprops, nextState) {
        console.log("u maincomponent ComponentWillUpdate");
    }

    



    render() {
        console.log("MainComponent render");
        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
        };

        //const booksState = this.state.books;
        let books = null;
        if (this.state.showBooks) {
            books = <BookList
                books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputState={this.changeWithInputState}
            />
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