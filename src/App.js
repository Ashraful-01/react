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
      border: "1px solid red",
      borderRadius: "5px",
      background: "black",
      color: "white"
    };

    console.log(this.state);
    return (
      <div className='App'>
        <h1 style={Style}>Book List</h1>
        <button onClick={() => this.ChangeBookState("The BalChemist")}>Change state</button>
        <input type="Text" onChange={this.ChangeWithInputState} />
        <Book
          bookName={this.state.books[0].bookName}
          Writer={this.state.books[0].Writer}
          InputBook={this.ChangeWithInputState}
        />
        <Book
          bookName={this.state.books[1].bookName}
          Writer={this.state.books[1].Writer} />
        <Book
          bookName={this.state.books[2].bookName}
          Writer={this.state.books[2].Writer} />
        <Book
          bookName={this.state.books[3].bookName}
          Writer={this.state.books[3].Writer} change={this.ChangeBookState.bind(this, "nineteen 84")} />
      </div>
    );
  }
}


export default App;
