import { Component } from 'react'
import { Button } from 'react-bootstrap'
import LoginForm from './LoginForm';


export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
    }
  }

  setLoginState = () => {
    this.setState({
      loginStatus: true,
    })
  }

  render() {
    return (
      <>
        {this.state.loginStatus
          ?
          <LoginForm loginHandler={this.props.loginHandler}/>
          :
          <Button variant="secondary" onClick={this.setLoginState}>Log In</Button>
        }
      </>
    )
  }
}
