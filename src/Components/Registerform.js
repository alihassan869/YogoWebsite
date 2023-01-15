import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Registerform.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const FaLock = <FontAwesomeIcon icon={faLock} />;
const FaGoogle = <FontAwesomeIcon icon={faGoogle} />;
const FaGithub = <FontAwesomeIcon icon={faGithub} />;
const FaUser = <FontAwesomeIcon icon={faUser} />;
const FAMessage = <FontAwesomeIcon icon={faMessage} />;
function Registerform() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: '',
    email: '',
    password: '',
    Cpassword: '',
    Checkbox: false,
  });
  const handladata = (e) => {
    const { name, value } = e.target;
    if (name === 'Checkbox') {
      setuser({
        ...user,
        [name]: e.target.checked,
      });
    } else {
      setuser({
        ...user,
        [name]: value,
      });
    }
  };

  const Register = (e) => {
    e.preventDefault();
    const { name, email, password, Cpassword, Checkbox } = user;
    if (name && email && password && password === Cpassword && Checkbox) {
      axios.post('http://localhost:250/Register', user).then((res) => {
        alert(res.data.message);
        navigate('/Login');
      });
    }
  };
  return (
    <>
      <div className="container  py-5">
        <div className="form-l-box row w-50  mx-auto ">
          <div className="links-box mx-auto  text-center  py-5">
            <p>Sign up with</p>
            <button className=" btn-link px-4 py-2 text-decoration-none mb-3 mb-md-0">
              {FaGithub}
              GITHUB
            </button>
            <button className=" btn-link px-4 py-2 text-decoration-none">
              {FaGoogle}
              GOOGLE
            </button>
          </div>
          <div className="form">
            <Form className=" mx-auto py-5 form-Register text-start">
              <p className="text-center">Or sign up with credentials</p>
              <Form.Group className="mb-3 w-75 mx-auto shadow">
                <div className="input-box d-flex ">
                  <div className="icon">{FaUser}</div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-50 input"
                    required
                    name="name"
                    value={user.name}
                    onChange={handladata}
                  />
                </div>
              </Form.Group>
              <Form.Group
                className="mb-3 w-75 mx-auto"
                controlId="formBasicEmail"
              >
                <div className="input-box d-flex shadow ">
                  <div className="icon">{FAMessage}</div>
                  <input
                    type="email"
                    placeholder=" Email "
                    className="w-50 input"
                    required
                    name="email"
                    value={user.email}
                    onChange={handladata}
                  />
                </div>
              </Form.Group>
              <Form.Group
                className="mb-3 w-75 mx-auto shadow"
                controlId="formBasicPassword"
              >
                <div className="input-box d-flex ">
                  <div className="icon">{FaLock}</div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-50 input"
                    required
                    name="password"
                    value={user.password}
                    onChange={handladata}
                  />
                </div>
              </Form.Group>
              <Form.Group
                className="mb-3 w-75 mx-auto shadow"
                controlId="formBasicPassword"
              >
                <div className="input-box d-flex ">
                  <div className="icon">{FaLock}</div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-50 input"
                    required
                    name="Cpassword"
                    value={user.Cpassword}
                    onChange={handladata}
                  />
                </div>
              </Form.Group>
              <Form.Group
                className="mb-3 me-md-5  w-100 ps-md-5"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="I agree with the Privacy Policy"
                  className="ms-md-5 "
                  required
                  name="Checkbox"
                  value={user.Checkbox}
                  onChange={handladata}
                />
              </Form.Group>
              <Button
                type="submit"
                className="sign-btn "
                style={{ background: '#6900d1', border: 'none' }}
                onClick={Register}
              >
                CREATE ACCOUNT
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registerform;
