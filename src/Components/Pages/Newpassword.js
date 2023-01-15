import React, { useState } from 'react';
import './Newpassword.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
const FaLock = <FontAwesomeIcon icon={faLock} />;

function Newpassword() {
  const navigate = useNavigate();
  const { token } = useParams();

  const [user, setuser] = useState({
    password: '',
    Cpassword: '',
    token: token,
  });
  const handladata = (e) => {
    const { name, value } = e.target;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const update = (e) => {
    e.preventDefault();
    const { password, Cpassword, token } = user;
    if (password && password === Cpassword && token) {
      axios.post('http://localhost:250/update', user).then((res) => {
        alert(res.data.message);
        navigate('/Login');
      });
    }
  };
  return (
    <>
      <div className="form">
        <Form className=" mx-auto py-5 form-Register text-start">
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

          <Button
            type="submit"
            className="sign-btn "
            style={{ background: '#6900d1', border: 'none' }}
            onClick={update}
          >
            UPDATE PASSWORD
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Newpassword;
