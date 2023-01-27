import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Header from './Header';
import Sect from './Sect';

function App() {
  return (
    <div>
      <Header />
      <MDBContainer className='mt-5 mb-5'>
        <Sect />
      </MDBContainer>
    </div>
  );
}

export default App;
