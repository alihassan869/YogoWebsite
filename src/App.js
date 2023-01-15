import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Servicepage from './Components/Pages/Servicepage';
import Loginform from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Review from './Components/Pages/Review';
import Forget from './Components/Pages/Forget';
import Newpassword from './Components/Pages/Newpassword';
import Notfound from './Components/Pages/Notfound';
import { useState } from 'react';
function App() {
  const [user, setuserlogin] = useState({});
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home to="/" />
              ) : (
                <Loginform setuserlogin={setuserlogin} />
              )
            }
          />
          <Route
            exact
            path="/Service"
            element={
              user && user._id ? (
                <Servicepage />
              ) : (
                <Loginform setuserlogin={setuserlogin} />
              )
            }
          />
          <Route
            exact
            path="/Login"
            element={<Loginform setuserlogin={setuserlogin} />}
          />
          <Route exact path="/Register" element={<Register />} />

          <Route
            exact
            path="/Review"
            element={
              user && user._id ? (
                <Review />
              ) : (
                <Loginform setuserlogin={setuserlogin} />
              )
            }
          />
          <Route exact path="/Forget" element={<Forget />} />
          <Route exact path="/Newpassword/:token" element={<Newpassword />} />
          <Route exact path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
