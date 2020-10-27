import React from 'react';
import styled from "styled-components";

const MyImg = styled.img`
  width: 20px;
  margin-bottom: 3px;
  margin-right: 5px;
`;

const MyA = styled.a`
  width: 100%;
  background-color: #fff !important;
  
  &:hover {
    box-shadow: 0 0 16px #4285f4;
  }
`;

const MySpan = styled.span`
  font-weight: bold;
`;

export default function MyGoogleLoginButton() {

  return (
    <div className="col-12">
      <MyA className="btn btn-outline-dark" id="login-button" role="button">
        <MyImg
          alt="Google sign-in"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
        <MySpan>Login with Google</MySpan>
      </MyA>
    </div>
  );
}

