import React from 'react';
import './Home.css';
import NavBar from '../NavBar';
import Header from '../Header';
import Services from '../Services';
import Aboutus from '../Aboutus';
import Footer from '../Footer';
function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Services />
      <Aboutus />
      <Footer />
    </>
  );
}

export default Home;
