import React, { Component } from 'react';
import Book from '../representationalComponent/Book';


class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("BookList constructor")
    }
    UNSAFE_componentWillMount() {
        console.log("BookList componentWillMount!");
    }

    componentDidMount() {
        console.log("BookList componentDidMount!");
    }

    UNSAFE_componentWillReceiveProps(nextprops) {
        console.log("U BookList componentWillReceiveprops", nextprops);
    }
//we can control by using shoouldcomponentupdate 
    shouldComponentUpdate(nextprops, nextState) {
        console.log("u Booklist shouldComponentUpdate", nextprops, nextState);
        return false;
    }

    UNSAFE_componentWillUpdate(nextprops, nextState) {
        console.log("u BookList ComponentWillUpdate");
    }

    componentDidUpdate() {
        console.log("U BookList componentDidUpdate");
    }

    render() {
        console.log("BookList render!");
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