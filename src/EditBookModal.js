import { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";

class EditBookModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EditBook: {},
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

  setEditBook = () => {
    this.props.updateBook()
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let bookToUpdate = {
      title: this.state.title || this.props.book.title,
      description: this.state.description || this.props.book.description,
      author: this.state.author || this.props.book.author,
      _id: this.props.book._id,
      __v: this.props.book.__v,
      email: this.props.user
    }
    console.log(bookToUpdate);
    this.props.updateBook(bookToUpdate);
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
            <Modal.Title>Edit a Book</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onInput={this.setTitleState} />
            </Form.Group>
            <Form.Group controlId="desc">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" onInput={this.setDescState} />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" onInput={this.setAuthorState} />
            </Form.Group>
            <Button type="submit">Submit Changes</Button>
          </Form>
        </Modal>
      </>
    );
  }
};

export default EditBookModal;
