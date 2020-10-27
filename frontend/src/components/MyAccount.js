import React, { useState, useEffect } from 'react';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MyContainer } from './MyContainer';
import UserDataService from '../services/user.service';

function MyAccount(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  });

  const getUser = () => {
    UserDataService.get(props.userId)
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.username);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false)
      });
  }

  return (
    <>
      <MyNavbar history={props.history} />
      <MyContainer>
        <Row>
          <Col><h5>User Profile</h5><br /></Col>
        </Row>
        <Row>
          <Col>
            <p className="font-weight-bold">Name</p>
            <p className="text-capitalize">{name.toLowerCase()}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="font-weight-bold">Email</p>
            <p className="text-lowercase">{email}</p>
          </Col>
        </Row>
      </MyContainer>
      <Footer />
    </>
  );
}

export default MyAccount;