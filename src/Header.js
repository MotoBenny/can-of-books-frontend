import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.user,
    }
  }

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          {
            this.props.auth0.isAuthenticated
              ?
              <>
                <NavItem><Link to="/BestBooks" className="nav-link">Best Books</Link></NavItem>
                <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
                <LogoutButton />
              </>
              : <LoginButton />
          }
        </Navbar>
      </>
    )
  }
}

export default Header;
