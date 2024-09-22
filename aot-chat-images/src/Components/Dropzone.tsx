import {useDropzone} from 'react-dropzone';
import { LuUpload } from "react-icons/lu";
import '../Styles/Dropzone.css';

function Dropzone(props) {
  const {
  	errorCallback
  } = props;

  const {
  	acceptedFiles,
  	getRootProps,
  	getInputProps
  } = useDropzone({
  	accept: {
  		'image/*': []
  	},

    onDropRejected: (file: T) => {
      errorCallback();
    },

    validator: () => ({
      code: "not-allowed",
      message: "Failed",
    }),
  });

  return (
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div>
          <LuUpload size={40} />
          <p>Select an image to convert</p>
        </div>
      </div>
  );
}

export default Dropzone;
