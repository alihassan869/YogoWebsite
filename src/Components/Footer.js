import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <>
      <div className="footer-card text-center pt-5">
        <h3>Subcribe To Our Newsletter</h3>
        <form className="d-flex flex-column w-50 mx-auto py-3 mb-3">
          <input
            type="email"
            name="email"
            id="email"
            className="text-center mb-2 py-2 email "
            placeholder="Enter Email Here"
            required
          />
          <button className="btn-footer w-25  mx-auto ">SUBCRIBED NOW</button>
        </form>
        <p className="">CopyRights @ 2019 DESIGNER By Ali Hassan</p>
      </div>
    </>
  );
}

export default Footer;
