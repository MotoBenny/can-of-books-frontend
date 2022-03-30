import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import Profile from './Profile';
import Login from './Login';
import LogoutButton from './LogoutButton';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user: user
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
    console.log('button works')
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/BestBooks">
              {this.state.user
                ?
                <BestBooks user={this.state.user}/>
                :
                <Login loginHandler={this.loginHandler}/>
              }
            </Route>
            <Route exact path="/Profile">
              <Profile userInfo={this.state.user}/>
            </Route>
            <Route exact path="/LogoutButton">
              <LogoutButton onLogout={this.logoutHandler}/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
