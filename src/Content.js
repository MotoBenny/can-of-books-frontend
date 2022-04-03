import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import Profile from './Profile';
import Header from './Header';

class Content extends React.Component {

  render() {

    return (
      <>
        <h1>Content</h1>
        <Router>
        <Header auth0={this.props.auth0}/>
          <Switch>
          <Route exact path="/">
          {this.props.auth0.isAuthenticated
                ?
                <BestBooks auth0={this.props.auth0} />
                :
                <></>
              }
            </Route>
            <Route exact path="/BestBooks">
              {this.props.auth0.isAuthenticated
                ?
                <BestBooks auth0={this.props.auth0} />
                :
                <></>
              }
            </Route>
            <Route exact path="/Profile">
              <Profile/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(Content)