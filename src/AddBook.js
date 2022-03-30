import { Component } from "react";
import { Button } from "react-bootstrap";

import BookFormModal from "./BookFormModal";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: false
    }
  }

  displayModal= () => {
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
    return (
      <>
        <main>
          <>
          <Button onClick={this.displayModal}>Add a Book</Button>
          <BookFormModal postBooks={this.props.postBooks} modalDisplay={this.state.modalDisplay} hideModal={this.hideModal} user={this.props.user}/>
          </>
        </main>
      </>
    );
  }
};

export default AddBook;


