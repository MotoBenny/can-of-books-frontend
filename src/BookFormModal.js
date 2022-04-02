import { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";

class BookFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBook: {},
      title: '',
      description: '',
      author: '',
      email: ''
    }
  }
  setTitleState = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  setDescState = (e) => {
    this.setState({
      description: e.target.value
    });
  };

  setAuthorState = (e) => {
    this.setState({
      author: e.target.value
    });
  };

  setNewBook = () => {
    this.props.postBooks({
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      email: this.props.user || 'email@email.com'
    })
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setNewBook(e)
  };

  render() {
    return (
      <>
        <Modal
        style={{ width: '25rem' }}
        show={this.props.modalDisplay}
        onHide={this.props.hideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a Book</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onInput={this.setTitleState}/>
            </Form.Group>
            <Form.Group controlId="desc">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" onInput={this.setDescState}/>
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" onInput={this.setAuthorState}/>
            </Form.Group>
            <Button type="submit">Add Book</Button>
          </Form>
        </Modal>
      </>
    );
  }
};

export default BookFormModal;
