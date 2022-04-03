import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from 'react-bootstrap';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  /* STRETCH TODO: if no logged in user then redirect home */
  return (
    isAuthenticated && (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Img src={user.picture}></Card.Img>
          <Card.Text>
            {user.email}
          </Card.Text>
        </Card.Body>
      </Card>
    ))
};

export default Profile;
