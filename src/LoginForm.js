import { Component } from "react";
import { Form, Button } from 'react-bootstrap'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  setEmailState = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginHandler(this.state.user);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onInput={this.setEmailState}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="secondary" type="submit" >Submit</Button>
      </Form>
    );
  }
};

export default LoginForm;
