import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, increaseQty } from '../../redux/slice/cartSlice';
import { errorToast, successToast } from '../../helper/Toaster';

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const authUserId = useSelector((state) => state.auth.user?.id);

  const handleAdd = () => {
    if (!isLoggedIn) {
      errorToast('Login to Order');
      return;
    }
    if (
      cartItems.find((ele) => ele.id === item.id && ele.userId === authUserId)
    ) {
      dispatch(increaseQty(item.id));
    } else {
      dispatch(addToCart({ item: item, id: authUserId }));
    }
    successToast('Item Added to Cart');
  };

  return (
    <div className="menu">
      <div className="box2">
        <img src={item.img} alt="food-item" className="image" />
        <div className="data">
          <p className="title">{item.name}</p>
          <Link to="/shop" className="seller text-sm">
            by {item.seller}
          </Link>
          <div className="description">{item.description}</div>
          <span className="price">
            <h6>Rs. {item.price}</h6>
          </span>
          <button className="py-1 focus:outline-none" onClick={handleAdd}>
            <i className="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Product;
