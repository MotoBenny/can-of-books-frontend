import React from 'react';
import axios from 'axios';
import { Container, Carousel } from 'react-bootstrap';
import './BestBooks.css';

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
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data
      })
    } catch (error) {
      console.log('We have ran into an error: ', error.response.data);
    }
  };

  componentDidMount() {
    this.getBooks();
    console.log('Calling getbooks');
  } ;

  render() {

    /* TODO: render user's books in a Carousel */
    let booksCarousel = this.state.books.map((book) => (
      <Carousel.Item key={book._id}>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
      <Carousel.Caption>
        <h3>{book.author}</h3>
      </Carousel.Caption>
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
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
