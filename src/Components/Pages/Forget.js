import React, { useState } from 'react';
import './Forget.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
const FaMessage = <FontAwesomeIcon icon={faMessage} />;
function Forget() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: '',
  });
  const handladata = (e) => {
    const { name, value } = e.target;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const Send = (e) => {
    e.preventDefault();
    const { email } = user;
    if (email) {
      axios.post('http://localhost:250/Forget', user).then((res) => {
        alert(res.data.message);
        navigate('/Login');
      });
    } else {
      alert('please fill the fields correctly');
    }
  };
  return (
    <>
      <div className="container">
        <Form className=" mx-auto py-5 form-login text-start">
          <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
            <div className="input-box d-flex shadow ">
              <div className="icon">{FaMessage}</div>
              <input
                type="email"
                placeholder="Enter Email Here "
                className="w-50 input"
                required
                name="email"
                value={user.email}
                onChange={handladata}
              />
            </div>
          </Form.Group>
          <Button
            type="submit"
            className="sign-btn "
            style={{ background: '#6900d1', border: 'none' }}
            onClick={Send}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Forget;
