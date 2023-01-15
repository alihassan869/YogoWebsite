import React from 'react';
import './Notfound.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
function Notfound() {
  return (
    <>
      <NavBar />
      <div className="text404">
        <h1>Page Not Found</h1>
        <b className="my-3">We couldn't find what you were looking for</b>
        <p>
          Please contact the owner of the site that linked you to the original
          URL and let them know their link is broken.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Notfound;
