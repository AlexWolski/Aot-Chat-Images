import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/dist/react-notifications.css'
import Dropzone from '../Components/Dropzone.tsx';
import StyledNavbar from '../Components/StyledNavbar.tsx'
import '../Styles/Homepage.css';

function Homepage(props) {
  const errorAlert = (errorMessage: string) => {
    NotificationManager.error(errorMessage);
  }

  return (
    <section className='container'>
      <NotificationContainer />
      <StyledNavbar />
      <Dropzone errorCallback={errorAlert} />


    </section>
  );
}

export default Homepage;
