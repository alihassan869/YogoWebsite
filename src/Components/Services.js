import React from 'react';
import './Services.css';
import img1 from '../Assests/images/Icon-1.png';
import img2 from '../Assests/images/Icon-2.png';
import img3 from '../Assests/images/Icon-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
function Services() {
  return (
    <>
      <div className="Services py-md-4">
        <div className="text-title pt-3">
          <div className="text-center py-4">
            <h3>
              We Provide a wide range <br></br>of Services
            </h3>
            <p>Let's Start Ordering With Yogo App To Save A Huge Money Today</p>
          </div>
        </div>
        <div className="container d-flex flex-md-row flex-column ">
          <div className="shadow py-5 px-5 me-md-3 mx-auto ">
            <figure>
              <img src={img1} alt="not found" className="img-fluid" />
            </figure>
            <h5 className="my-3">Express Delivery</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, ipsum.
            </p>
            {element}
          </div>
          <div className="shadow py-5 px-5 me-md-3 mx-auto">
            <figure>
              <img src={img2} alt="not found" className="img-fluid" />
            </figure>
            <h5 className="my-3">Offer Around You</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, ipsum.
            </p>
            {element}
          </div>
          <div className="shadow py-5 px-5  mx-auto">
            <figure>
              <img src={img3} alt="not found" className="img-fluid" />
            </figure>
            <h5 className="my-3">Pocket Friendly</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, ipsum.
            </p>
            {element}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
