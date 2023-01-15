import React from 'react';
import './ABoutus.css';
import img1 from '../Assests/images/feature.png';
import img2 from '../Assests/images/explore.png';
function Aboutus() {
  return (
    <>
      <div className="container About py-5">
        <div className="row">
          <div className="col-md-4 col-10 mx-auto mb-md-0 mb-3 ">
            <figure>
              <img src={img1} alt="not found" className="img-fluid" />
            </figure>
          </div>
          <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 text-start mt-md-5 pt-md-4">
            <h3>We Always Love To Hear From Our Customers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloribus, odit in cumque.
            </p>
            <button className="btn-watch px-4 py-2">Watch now</button>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 order-2">
            <figure>
              <img src={img2} alt="not found" className="img-fluid" />
            </figure>
          </div>
          <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 text-start mt-md-5 pt-md-5 ">
            <h3>How Does Yoga make life better?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloribus, odit in cumque.
            </p>
            <button className="btn-watch px-4 py-2">EXPORE NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
