import React, { useState } from 'react';
import './Loginform.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
const FaLock = <FontAwesomeIcon icon={faLock} />;
const FaGoogle = <FontAwesomeIcon icon={faGoogle} />;
const FaGithub = <FontAwesomeIcon icon={faGithub} />;
const FaMessage = <FontAwesomeIcon icon={faMessage} />;

function Loginform({ setuserlogin }) {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: '',
    password: '',
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
  const Login = (e) => {
    e.preventDefault();
    const { email, password, Checkbox } = user;
    if (email && password && Checkbox) {
      axios.post('http://localhost:250/login', user).then((res) => {
        alert(res.data.message);
        setuserlogin(res.data.user);
        navigate('/');
      });
    }
  };

  return (
    <>
      <div className="container  py-5">
        <div className="form-l-box row w-50  mx-auto ">
          <div className="links-box mx-auto  text-center  py-5">
            <p>Sign in with</p>
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
            <Form className=" mx-auto py-5 form-login text-start">
              <p className="text-center">Or sign in with credentials</p>
              <Form.Group
                className="mb-3 w-75 mx-auto"
                controlId="formBasicEmail"
              >
                <div className="input-box d-flex shadow ">
                  <div className="icon">{FaMessage}</div>
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
                className="mb-3 me-md-5  w-100 ps-md-5"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Remember me"
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
                onClick={Login}
              >
                SIGN IN
              </Button>
            </Form>
          </div>
          <div className="forgetandcreate d-flex justify-content-between">
            <Link
              to="/Forget"
              className="text-decoration-none"
              style={{ color: '#6900d1' }}
            >
              Forget Password ?
            </Link>
            <Link
              to="/Register"
              className="text-decoration-none"
              style={{ color: '#6900d1' }}
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginform;
