import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQty,
  increaseQty,
  removeCart,
} from '../../redux/slice/cartSlice';
import { errorToast, successToast } from '../../helper/Toaster';

const Cart = () => {
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [total, setTotal] = useState(0);
  const [authItem, setAuthItem] = useState([]);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const authUserId = useSelector((state) => state.auth.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const userItems = cartItems.filter((item) => {
      return item.userId === authUserId;
    });
    setAuthItem(userItems);
  }, [cartItems]);

  useEffect(() => {
    if (authItem.length > 0) {
      authItem.forEach((item) => {
        if (item.qty === 0) {
          dispatch(removeCart(item.id));
        }
      });
      setTotal(
        authItem.reduce((acc, item) => {
          acc += item.price * item.qty;
          return acc;
        }, 0)
      );
    }
    // eslint-disable-next-line
  }, [authItem]);

  const handleDiscount = () => {
    if (!couponCode) {
      errorToast('No coupon');
    } else if (couponCode === 'EARLY40') {
      setCouponApplied(couponCode);
      setDiscount(total * 0.4);
      successToast('40% Discount Applied');
    } else {
      errorToast('Invalid Coupon Code');
    }
    setCouponCode('');
  };
  return (
    <section className="cart py-4">
      {authItem.length > 0 ? (
        <div className="order container mx-auto xl:w-1/2">
          <div className="flex items-center border-b border-gray-300 pb-4">
            <img src="/Assets/Images/cart-black.png" alt="cart" />
            <h1 className="font-bold ml-4 text-2xl">Order summary</h1>
          </div>
          <div className="i-list">
            {authItem.map((item) => {
              return (
                <div className="flex items-center my-8" key={item.id}>
                  <button
                    className="mr-5 focus:outline-none"
                    onClick={() => {
                      dispatch(removeCart(item.id));
                    }}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <img className="w-24" src={item.img} alt="" />
                  <div className="flex-1 ml-4">
                    <h1>{item.name}</h1>
                    <span className="text-sm">by {item.seller}</span>
                  </div>
                  <div className="flex-1">
                    <button
                      className="border mr-2 px-2"
                      onClick={() => {
                        dispatch(increaseQty(item.id));
                      }}
                    >
                      +
                    </button>
                    {item.qty}
                    <button
                      className="border ml-2 px-2"
                      onClick={() => {
                        dispatch(decreaseQty(item.id));
                      }}
                    >
                      {item.qty === 1 ? (
                        <i className="fa-regular fa-trash-can"></i>
                      ) : (
                        '-'
                      )}
                    </button>
                  </div>
                  <span className="font-bold text-lg">
                    ₹ {item.price * item.qty}
                  </span>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="text-right py-4">
            <div>
              <span className="flex">
                <input
                  type="text"
                  className=" text-sm border border-black-300 bg-gray-50 px-2"
                  placeholder="Have a coupon"
                  onChange={(e) => setCouponCode(e.target.value)}
                  value={couponCode}
                />
                <button
                  className="border p-2 bg-green-500"
                  onClick={handleDiscount}
                >
                  Apply
                </button>
              </span>
              {couponApplied && (
                <div className="coupan-applied mr-16">
                  <div className="inline">
                    Coupon Applied{' '}
                    <span className="border-2 border-dashed p-1">
                      {couponApplied}
                    </span>
                  </div>
                  <button
                    className="ml-1 focus:outline-none"
                    onClick={() => {
                      setCouponApplied(false);
                      setDiscount(0);
                    }}
                  >
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                </div>
              )}
              {couponApplied && (
                <div className="text-green-500 text-sm mr-16 mt-2">
                  You saved <span className="text-lg">₹{discount}</span>
                </div>
              )}
              <span className="text-lg font-bold">Total Amount:</span>
              <span className="amount text-2xl font-bold ml-2">
                ₹{total - discount}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold mb-2">Cart Empty 😕</h1>
          <p className="text-gray-500 text-lg mb-12">
            You probably haven't ordered yet. <br />
            To order , go to the Menu page.
          </p>
          <img
            className="w-2/6 mx-auto mb-8"
            src="/Assets/Images/empty-cart.png"
            alt="empty-cart"
          />
          <Link
            to="/menu"
            className="text-white bg-red-500 hover:bg-red-600 rounded-full text-sm px-5 py-2.5 text-center mb-2 px-6 py-2"
          >
            Goback
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
