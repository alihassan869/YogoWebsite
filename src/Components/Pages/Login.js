import React from 'react';
import NavBar from '../NavBar';
import Loginform from '../Loginform';
import Footer from '../Footer';
function Login({ setuserlogin }) {
  return (
    <>
      <NavBar />
      <Loginform setuserlogin={setuserlogin} />
      <Footer />
    </>
  );
}

export default Login;
