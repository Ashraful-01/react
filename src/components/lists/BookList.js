import React, { Component } from 'react';
import Book from '../representationalComponent/Book';


class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("BookList constructor")
    }


    componentDidMount() {
        console.log("BookList componentDidMount!");
    }


    //we can control by using shoouldcomponentupdate 
    shouldComponentUpdate(nextprops, nextState) {
        console.log("u Booklist shouldComponentUpdate", nextprops, nextState);
        return true;
    }


    componentDidUpdate() {
        console.log("U BookList componentDidUpdate");
    }
    static getDrivedStateFormProps(nextprops, prevState) {
        console.log("booklist getDerivedFromProps", nextprops, prevState);
        return prevState;
    }
    getSnapshotBeforeUpdate(){
        console.log("u boollist getSnapshotforeupdate")
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