import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './style/login.css';
import users from '../../data/userData';
import { login } from '../../redux/slice/authSlice';
import { errorToast, successToast } from '../../helper/Toaster';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (loggedIn === true) {
      successToast('LoggedIn Successfully');
      navigate('/cart');
    }
  }, [loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      errorToast("credential can't be empty");
    } else {
      const { email, password } = userData;
      const res = users.find(
        (user) => email === user.email && password === user.password
      );
      if (res) {
        dispatch(login(res));
      } else {
        errorToast('Invalid Credentials');
      }
    }
  };

  return (
    <div className="mx-auto flex flex-row items-center add-item">
      <div className="card grid grid-cols-2">
        <div>
          <img
            src="/Assets/Images/chef.jpg"
            alt=""
            className="img-fluid login-img"
          />
        </div>
        <div className="grid-cols-2 flex items-center content-center ml-5">
          <div className="form">
            <div className="get-started">
              <p className="text">Get Started</p>
            </div>
            <form>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                className="input"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <br />
              <input
                name="Enter Password"
                type="password"
                placeholder="Enter Password"
                className="input"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
              <br />
              <button
                className="login-btn block"
                type="submit"
                onClick={(e) =>{handleLogin(e)}}
              >
                Login
              </button>
              <span className="ml-5"></span>
              Don't Have an account?
              <a href="/signup"> Signup</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
