import { useState } from "react";


const TrocarFoto = () => {
  const [file, onChangeFile] = useState('icon.png');

  return (
    <>
      <input type="file" onChange={ () => onChangeFile(file)} value={file}>
        <img
          src={file}
          alt="Logo"
          id="logo2"
        />
      </input>
    </>
  );
};

export default TrocarFoto;
