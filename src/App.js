import React, { Component } from 'react';
import './App.css';
import Book from './components/Book'



class App extends Component {

  state = {
    books: [
      { bookName: "The Alchemist", Writer: "Poulo Koulho" },
      { bookName: "Jobon Jekhane Jemon", Writer: "Mizanur Rahman" },
      { bookName: "Thinking Fast and Slow", Writer: "Dan Brown" },
      { bookName: "How to grow Rich", Writer: "Anderw hardy" }
    ]

  }



  deleteBookState = index => {
    const books = this.state.books;
    books.splice(index, 1);
    this.setState({
      books: books
    })
  };






  //changing state with javaScript event
  // constructor() {
  //   super()
  //   this.state();
  // }
  render() {
    const Style = {
      border: "1px red",
      borderRadius: "5px",
      background: "black",
      color: "white"
    };

    const booksState = this.state.books;

    const books = booksState.map((book, index) => {
      return (
        <Book
          bookName={book.bookName}
          Writer={book.Writer}
          delete={() => this.deleteBookState(index)}
        />
      );
    });

    //console.log(booksState);




    return (
      <div className='App'>
        <h1 style={Style}>Book List</h1>
        {books}
      </div>
    );
  }
}


export default App;
