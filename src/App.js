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

  ChangeBookState = newBookName => {
    this.setState({
      books: [
        { bookName: newBookName, Writer: "Poulo Koulho" },
        { bookName: "Jobon Jekhane Jemon", Writer: "Mizanur Rahman" },
        { bookName: "Thinking Fast and Slow", Writer: "Dan Brown" },
        { bookName: "Biography of APJ Abul Kalam", Writer: "Anderw hardy" }
      ]
    });
  }

  ChangeWithInputState = event => {
    this.setState({
      books: [
        { bookName: event.target.value, Writer: "Poulo Koulho" },
        { bookName: "Jobon Jekhane Jemon", Writer: "Mizanur Rahman" },
        { bookName: "Thinking Fast and Slow", Writer: "Dan Brown" },
        { bookName: "Biography of APJ Abul Kalam", Writer: "Anderw hardy" }
      ]
    });
  }



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

    const books = booksState.map(book => {
      return (
        <Book
          bookName={book.bookName}
          Writer={book.Writer}
        />
      );
    });

    //console.log(booksState);




    return (
      <div className='App'>
        <h1 style={Style}>Book List</h1>
        <button onClick={() => this.ChangeBookState("The AalChemist")}>Change state</button>
        <input type="Text" onChange={this.ChangeWithInputState} />
        {books}
      </div>
    );
  }
}


export default App;
