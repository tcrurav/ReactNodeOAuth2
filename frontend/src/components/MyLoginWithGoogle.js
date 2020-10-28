import React, { useEffect } from 'react';
import MyGoogleLoginButton from './MyGoogleLoginButton';
import { setUserSession } from '../utils/Common';
import UserDataService from '../services/user.service';

// I have implemented the solution of this url:
// https://w3path.com/react-google-login-with-example/

function MyLoginWithGoogle(props) {

  useEffect(() => {

    const { changeLoadingState, history } = props;

    let auth2;

    const googleSDK = () => {
      window['googleSDKLoaded'] = () => {
        window['gapi'].load('auth2', () => {
          auth2 = window['gapi'].auth2.init({
            client_id: process.env.REACT_APP_CLIENT_ID,
            cookiepolicy: 'single_host_origin',
            scope: 'profile email'
          });
          prepareLoginButton();
        });
      }
  
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          window['googleSDKLoaded']();
          return;
        }
        js = d.createElement(s); js.id = id;
        js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'google-jssdk'));
  
    }

    const saveUser = (token, profile) => {
      var data = {
        username: profile.getEmail(),
        name: profile.getName(),
        password: profile.getId(),
      };
  
      changeLoadingState(true);
  
      UserDataService.create(data)
        .then(response => {
          setUserSession(token, profile, response.data.token, response.data.user);
  
          // setTimeout(() => { //Just to simulate the timeout
          changeLoadingState(false);
  
          history.push("/main");
          // }, 2000);
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    const prepareLoginButton = () => {
      auth2.attachClickHandler(document.querySelector('#login-button'), {},
        (googleUser) => {
  
          let profile = googleUser.getBasicProfile();
          // console.log('Token || ' + googleUser.getAuthResponse().id_token);
          // console.log('ID: ' + profile.getId());
          // console.log('Name: ' + profile.getName());
          // console.log('Image URL: ' + profile.getImageUrl());
          // console.log('Email: ' + profile.getEmail());
  
          //YOUR CODE HERE
  
          saveUser(googleUser.getAuthResponse().id_token, profile);
  
        }, (error) => {
          console.log(JSON.stringify(error, undefined, 2));
        });
    }

    googleSDK();
  }, []);

  return (
    <MyGoogleLoginButton />
  );
}

export default MyLoginWithGoogle;