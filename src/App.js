import React, { useState } from 'react';
import { FileInput as NewFileInput } from '@8base/file-manager'
import { gql, useMutation } from '@apollo/client'

const MY_MUTATION = gql`
  mutation PruebaCreate($data: PruebaCreateInput!) {
    pruebaCreate(data: $data) {
      id
      info {
        id
        fileId
        filename
        downloadUrl
        shareUrl
        meta
        public
        __typename
      }
      _description
      __typename
    }
  }

`;

const App = ({ client }) => {
  const [nameFile, setnameFile] = useState("Name file..");
  const [fileId, setfileId] = useState(null);

  const [createRow, { dataCreate }] = useMutation(MY_MUTATION);
  const handleCreateRow = () => {
    createRow({
      variables: {
        data: {
          info: {
            create: {
              fileId: fileId,
              filename: nameFile,
              public: false,
            },
          },
        },
      },
    });
  };

  
  const handleClickModal = async (pick) => {
    const accept = undefined
    await pick({
      ...(accept ? { accept } : {}),
    });
  };

  const handleGetResponse = (file) => {
    setnameFile(file[0].filename);
    setfileId(file[0].fileId);
  };

  if (dataCreate) console.log("dataCreate: " + dataCreate);

  return (
    <NewFileInput 
      apiKey={ `43bea5cf-fa8a-4924-ac3a-447cfd64c648` }
      // onChange={ (file) => alert(`Uploaded File`) }
      onChange={handleGetResponse}
      useFilestack={ false }
      maxFiles={ 5 }
      value={ null }
      environment={ `Master` }
      workspace={ `clt4ho3cr00000akvgsqj51qg` }
      uploadHost={ `https://qa4-file-manager.8basedev.com` }
    >
      { ({ pick }) => (
        <>
          <button onClick={ ()  => handleClickModal(pick) }>Button Text</button>
          <button onClick={ () => handleCreateRow() }> Create Row </button>
        </>
      ) }
    </NewFileInput>
  )
};

export default App ;