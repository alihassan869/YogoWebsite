import React from 'react';
import './Header.css';
import Homepic from '../Assests/images/home-pic.png';
function Header() {
  return (
    <>
      <div className="Head-con pt-5">
        <div className="container mt-2 pt-5">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 mt-md-5 pt-5">
              <h3>Let's Start The Magic</h3>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                doloribus, odit in cumque exercitationem possimus culpa
                voluptates animi quo totam.
              </p>
              <div className="btn-head-box d-flex">
                <button className="btn-head-1 me-3">Join Free</button>
                <button className="btn-head-2">Explore More</button>
              </div>
            </div>
            <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 text-end">
              <figure>
                <img
                  src={Homepic}
                  alt="not found "
                  className="img-fluid home-pic"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
