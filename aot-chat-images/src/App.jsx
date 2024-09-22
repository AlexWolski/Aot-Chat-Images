import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useDropzone} from 'react-dropzone';
import { LuUpload } from "react-icons/lu";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/dist/react-notifications.css'
import './App.css';

function App(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    onDropRejected: (file: T) => {
      NotificationManager.error('Error message');
    },

    validator: () => ({
      code: "not-allowed",
      message: "Failed",
    }),
  });

  return (
    <section className="container">
      <div>
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
          <Container>
            <Navbar.Brand href="#home">AOT2 Emojis</Navbar.Brand>
            <div className="navbar-divider"></div>
            <Nav className="me-auto">
              <Nav.Link href="#home">Saved Emojis</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <NotificationContainer/>

      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div>
          <LuUpload size={40} />
          <p>Select an image to convert</p>
        </div>
      </div>
    </section>
  );
}

export default App;
