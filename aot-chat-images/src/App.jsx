import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { LuUpload } from "react-icons/lu";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './App.css';
import 'react-notifications/dist/react-notifications.css'

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
