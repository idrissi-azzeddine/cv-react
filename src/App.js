import React from 'react';
import Header from './Header';
import Sect from './Sect';
import Cv from './Cv';
import { Provider } from 'react-redux';
import store from './store';
import { MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 


function App() {
  return (
    <Provider store={store}>
      <Header />
      <MDBContainer className='mt-5 mb-5'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Sect />} />
            <Route path='/cv' element={<Cv />} />
          </Routes>
        </BrowserRouter>
      </MDBContainer>
    </Provider>
  );
}

export default App;
