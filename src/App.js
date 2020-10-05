import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Cards from './components/Cards';
import Banner from './components/Banner';
import Contacts from './components/Contacts';
import MainTable from './components/Table/MainTable';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <MainTable />
      <Cards />
      <Contacts />
      <Footer />
    </div>
  );
}



export default App;
