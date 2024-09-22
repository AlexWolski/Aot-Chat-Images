import {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import { LuUpload } from "react-icons/lu";
import dropzoneStyles from '../Styles/Dropzone.css';

interface FileError {
  code: string;
  message: string;
}

interface FileUpload {
  file: File;
  errors: FileError[];
}

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

    onDropRejected: (files: FileUpload[]): string => {
      errorCallback(getDropError(files));
    },

    maxFiles: 1,
  });

  const getDropError = (files: FileUpload[]): string => {
    if (!files.length) {
      return 'No files were selected';
    }

    if (files.length > 1) {
      return 'Only one file can be selected';
    }

    const file = files[0];

    if (!file.errors.length) {
      return 'Unknown drop error occured';
    }

    const error = file.errors[0];

    if (error.code === 'file-invalid-type') {
      const filePath = files[0].file.path;
      const extention = filePath.split('.').pop();
      return 'Invalid file extention: ' + extention;
    }

    return error.message;
  }

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
