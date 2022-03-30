import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';
import './BestBooks.css';
import AddBook from './AddBook'
import DeleteButton from './DeleteButton'

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books?email=${this.props.user}`);
      this.setState({
        books: results.data
      })
    } catch (error) {
      console.log('We have ran into an error: ', error.response.data);
    }
  };

  postBooks = async (postedBook) => {
    try {
      let url = `${SERVER}/books`;
      let newBook = await axios.post(url, postedBook);
      this.setState({
        books: [...this.state.books, newBook.data]
      })
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  deleteBook = async (id) => {
    try {
      // maybe validation something?
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(Book => Book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  componentDidMount() {
    this.getBooks();
  };

  render() {
    let booksCarousel = this.state.books.map((book) => (
      <Carousel.Item key={book._id}>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <Carousel.Caption className='bookOsel'>
          <h3>{book.author}</h3>
        </Carousel.Caption>
        <DeleteButton id={book._id} deleteBook={this.deleteBook}/>
      </Carousel.Item>
    ));
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (
          <Container>
            <Carousel>
              {booksCarousel}
            </Carousel>
            <AddBook postBooks={this.postBooks} user={this.props.user}/>
          </Container>
        ) : (
          <Container>
          <h3>No Books Found :(</h3>
          <AddBook postBooks={this.postBooks} user={this.props.user}/>
          </Container>
        )}
      </>
    )
  }
}

export default BestBooks;
