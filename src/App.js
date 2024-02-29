import React from 'react';
import { FileInput as NewFileInput } from '8base-file-manager'

const App = ({ client }) => {
  const handleClickModal = (openModal) => {
    console.log('clicked')
    openModal();
  };

  return (
    <NewFileInput 
      apiKey={ `43bea5cf-fa8a-4924-ac3a-447cfd64c648` }
      onChange={ (file) => console.log(file) }
      useFilestack={ false }
      maxFiles={ 1 }
      value={ null }
      workspace={ `clt4ho3cr00000akvgsqj51qg` }
      uploadHost={ `https://qa4-file-manager.8basedev.com` }
    >
      { ({ openModal }) => (
        <>
          <button onClick={ ()  => handleClickModal(openModal) }>Button Text</button>
        </>
      ) }
    </NewFileInput>
  )
};

export default App ;