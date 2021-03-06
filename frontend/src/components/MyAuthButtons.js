import React from 'react';
import MyLoginWithGoogle from './MyLoginWithGoogle';
import MyLoginWithFacebook from './MyLoginWithFacebook';

function MyAuthButtons(props) {

  return (
    <>
      <div className="row">
        <MyLoginWithGoogle history={props.history} changeLoadingState={props.changeLoadingState} />
      </div>
      <div className="row">
        <MyLoginWithFacebook />
      </div>
    </>
  );
}

export default MyAuthButtons;