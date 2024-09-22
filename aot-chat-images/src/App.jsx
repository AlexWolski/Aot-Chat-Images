import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './App.css';
import 'react-notifications/dist/react-notifications.css'

function App(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    onDropRejected: () => {
      NotificationManager.error('Error message');
    },

    validator: () => ({
      code: "not-allowed",
      message: "Failed",
    }),
  });

  return (
    <section className="container">
      <NotificationContainer/>

      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Select an image file</p>
      </div>
    </section>
  );
}

export default App;
