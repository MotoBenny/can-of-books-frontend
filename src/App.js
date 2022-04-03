import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <>
          <Content auth0={this.props.auth0}></Content>
      </>
    )
  }
}

export default withAuth0(App);
