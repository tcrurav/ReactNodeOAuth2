import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { removeUserSession } from '../utils/Common';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const MyIcon = styled.img`
  width: 1em;
`;

const MyNavbarContainer = styled(Navbar)`
  margin-bottom: 2em;
`;



function MyNavbar(props) {

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <MyNavbarContainer bg="light" expand="md">
      <Navbar.Brand href="/main"><MyIcon src="img/bluecity-icon.jpg" alt="icon" /> Bluecity</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/main"><FontAwesomeIcon icon={faHome} /> Main</Nav.Link>
          <Nav.Link href="/my-account"><FontAwesomeIcon icon={faUser} /> My account</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Sign out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </MyNavbarContainer>
  );
}

export default MyNavbar;