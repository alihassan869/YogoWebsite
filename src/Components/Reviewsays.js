import React from 'react';
import './REviewsays.css';
import img1 from '../Assests/images/testimonial-1.png';
import img2 from '../Assests/images/testimonial-2.jpg';
import img3 from '../Assests/images/testimonial-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const FaTwitter = <FontAwesomeIcon icon={faTwitter} />;
const FaFacebook = <FontAwesomeIcon icon={faFacebook} />;
const FaGithub = <FontAwesomeIcon icon={faGithub} />;
function Reviewsays() {
  return (
    <>
      <div className="Review py-md-4">
        <div className="text-title pt-3">
          <div className="text-center py-4">
            <h3>
              WHAT Clients says <br></br>about Website
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium doloremque possimus iure quas adipisci modi ipsum
              voluptates est, laudantium dolor?
            </p>
          </div>
        </div>
        <div className="container d-flex flex-md-row flex-column ">
          <div className="shadow py-5 px-5 me-md-3 mx-auto ">
            <figure>
              <img src={img1} alt="not found" className="img-fluid" />
            </figure>
            <h5 className="my-3">Fatima Barber</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, ipsum.
            </p>
            <a href="#"> {FaTwitter}</a>
            <a href="#"> {FaFacebook}</a>
            <a href="#"> {FaGithub}</a>
          </div>
          <div className="shadow py-5 px-5 me-md-3 mx-auto">
            <figure>
              <img src={img2} alt="not found" className="img-fluid " />
            </figure>
            <h5 className="my-3">ALi Hassan</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, ipsum.
            </p>
            <a href="#"> {FaTwitter}</a>
            <a href="#"> {FaFacebook}</a>
            <a href="#"> {FaGithub}</a>
          </div>
          <div className="shadow py-5 px-5  mx-auto">
            <figure>
              <img src={img3} alt="not found" className="img-fluid" />
            </figure>
            <h5 className="my-3">SABA Gul</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, ipsum.
            </p>
            <a href="#"> {FaTwitter}</a>
            <a href="#"> {FaFacebook}</a>
            <a href="#"> {FaGithub}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviewsays;
