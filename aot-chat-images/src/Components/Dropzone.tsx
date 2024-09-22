import {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import { LuUpload } from "react-icons/lu";
import dropzoneStyles from '../Styles/Dropzone.css';

function Dropzone(props) {
  const {
    errorCallback
  } = props;

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },

    onDropRejected: (file: T) => {
      errorCallback();
    },
  });

  const dropzoneAccept = {
    backgroundColor:'#e0eeff',
    borderColor: '#2196f3',
  };

  const dropzoneReject = {
    backgroundColor:'#ffe1e1',
    borderColor: '#f32222',
  };

  const style = useMemo(() => ({
    ...dropzoneStyles,
    ...(isDragAccept ? dropzoneAccept : {}),
    ...(isDragReject ? dropzoneReject : {}),
  }), [
    isDragAccept,
    isDragReject,
  ]);

  return (
      <div {...getRootProps({className: 'dropzone', style})}>
        <input {...getInputProps()} />
        <div>
          <LuUpload size={40} />
          <p>Select an image to convert</p>
        </div>
      </div>
  );
}

export default Dropzone;
