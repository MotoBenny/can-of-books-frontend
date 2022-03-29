import { Component } from "react";
import { Card } from 'react-bootstrap';

class Profile extends Component {

  render() {
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Profile card</Card.Title>
          <Card.Text>
            {this.props.userInfo}
          </Card.Text>

        </Card.Body>
      </Card>
    )
  }
};

export default Profile;
