import React from 'react';
import { Redirect } from 'react-router-dom';

function MyError() {
  return (
    <Redirect
      to={{
        pathname: "/login"
      }}
    />
  )
}

export default MyError;