import React, { useState } from 'react';
import MyAuthButtons from './MyAuthButtons';
import { MyContainer } from './MyContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { BallBeat } from 'react-pure-loaders';

function Login(props) {

  const [ loading, setLoading ] = useState(false);

  return (
    <>
      {loading ?
        <MyContainer>
          <Row className="justify-content-md-center h-50">
            <Col md={6} className="text-center mt-auto pb-5">
              <BallBeat
                color={'#123abc'}
                loading={loading}
              />
            </Col>
          </Row>
        </MyContainer>
        :
        <MyContainer>
          <Row className="justify-content-md-center h-50">
            <Col md={6} className="text-center mt-auto pb-5">
              <Image fluid src="img/bluecity.jpg" alt="logo" />
            </Col>
          </Row>
          <Row className="justify-content-md-center h-50">
            <Col md={6} className="mb-auto">
              <MyAuthButtons history={props.history} changeLoadingState={setLoading} />
            </Col>
          </Row>
        </MyContainer>
      }
    </>
  );
}

export default Login;