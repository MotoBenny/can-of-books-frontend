import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import BestBooks from './BestBooks';

class Footer extends React.Component {
  render() {
    return (
      <>
      <BestBooks/>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Code Fellows</Navbar.Brand>
      </Navbar>
      </>
    )
  }
}

export default Footer;
