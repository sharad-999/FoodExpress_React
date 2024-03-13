import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/authSlice';

import './style/navbar.css';

const Navbar = () => {
  const [counter, setCounter] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const authUserId = user?.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const authItem = cartItems.filter((item) => {
        return item.userId === authUserId;
      });
      setCounter(authItem.length);
    }
  }, [cartItems, authUserId, isLoggedIn]);

  return (
    <nav className="navbar">
      <ul className="nav-left">
        <li>
          <Link to="/">
            <img
              src="/Assets/Images/logo.png"
              className="logo"
              alt="logo"
            ></img>
          </Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        {isLoggedIn && user.role === 'Seller' ? (
          <li>
            <Link to="/seller">Add Product</Link>
          </li>
        ) : (
          ''
        )}
      </ul>
      <ul className="nav-right">
        <li>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping text-xl cart">
              {isLoggedIn && counter > 0 ? (
                <span className="counter text-sm">{counter}</span>
              ) : null}
            </i>
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <>
              <img
                id="avatarButton"
                type="button"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer avtar ring-2 ring-red-700"
                src="/Assets/Images/avtar.png"
                alt="User dropdown"
              />
              <div
                id="userDropdown"
                className="z-10 bg-white absolute divide-y divide-black-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600 toggle-data"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{user.name}</div>
                  <div className="font-medium truncate">{user.email}</div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
                <div className="py-1">
                  <button
                    className="block w-full focus:outline-none align-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                    onClick={() => {
                      dispatch(logout());
                      navigate('/login');
                    }}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
