import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/dist/react-notifications.css'
import Dropzone from '../Components/Dropzone';
import StyledNavbar from '../Components/StyledNavbar'
import '../Styles/Homepage.css';

function Homepage(props) {
  const errorAlert = () =>  { NotificationManager.error('Error message'); }

  return (
    <section className="container">
      <NotificationContainer />
      <StyledNavbar />
      <Dropzone errorCallback={errorAlert} />


    </section>
  );
}

export default Homepage;
