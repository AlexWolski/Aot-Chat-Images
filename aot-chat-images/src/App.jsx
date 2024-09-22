import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './App.css';

function App(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Select an image file</p>
      </div>
    </section>
  );
}

export default App;
