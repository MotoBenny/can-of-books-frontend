import React from 'react';
import axios from 'axios';
import { Carousel, Container, Button } from 'react-bootstrap';
import './BestBooks.css';
import AddBook from './AddBook'
import DeleteButton from './DeleteButton'
import EditBookModal from './EditBookModal';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modalDisplay: false
    }
  }

  getBooks = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      // console.log(jwt)
      try {
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/books',
          headers: { "Authorization": `Bearer ${jwt}` },
          params: {email: 'email@email.com'}
        };
        const results = await axios(config);
        this.setState({
          books: results.data
        })
      } catch (error) {
        console.log('get book error: ', error.response.data);
      }
    }
  };

  postBooks = async (postedBook) => {
      try {
        let url = `${SERVER}/books`;
        let newBook = await axios.post(url, postedBook);
        this.setState({
          books: [...this.state.books, newBook.data]
        })
      } catch (error) {
        console.log('post book error: ', error.response.data)
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
    } catch (error) {
      console.log('delete book error: ', error.response.data)
    }
  }

  updateBook = async (bookToUpdate) => {
    try {
      let url = `${SERVER}/books/${bookToUpdate._id}`;
      console.log(url);
      let updatedBook = await axios.put(url, bookToUpdate);
      console.log(updatedBook)
      let updatedBookData = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
          ? updatedBook.data
          : existingBook;
      });
      console.log(updatedBookData)
      this.setState({ books: updatedBookData });
    } catch (error) {
      console.error('update book error:', error.message);
    };
  };

  componentDidMount() {
    this.getBooks();
  };

  displayModal = () => {
    this.setState({
      modalDisplay: true,
    });
  };

  hideModal = () => {
    this.setState({
      modalDisplay: false
    });
  };

  render() {
    let booksCarousel = this.state.books.map((book) => (
      <Carousel.Item key={book._id}>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <Carousel.Caption className='bookOsel'>
          <h3>{book.author}</h3>
        </Carousel.Caption>
        <DeleteButton id={book._id} deleteBook={this.deleteBook} />
        <Button onClick={this.displayModal}>Edit a Book</Button>
        <EditBookModal updateBook={this.updateBook} user={this.props.user} book={book} modalDisplay={this.state.modalDisplay} hideModal={this.hideModal} />
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
            <AddBook postBooks={this.postBooks} user={this.props.user} />
          </Container>
        ) : (
          <Container>
            <h3>No Books Found :(</h3>
            <AddBook postBooks={this.postBooks} user={this.props.user} />
          </Container>
        )}
      </>
    )
  }
}

export default BestBooks;
