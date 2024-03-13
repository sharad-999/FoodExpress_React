import React from 'react';
import { useSelector } from 'react-redux';
import './style/product.css';
import Product from './Product';

const Products = () => {
  const items = useSelector((state) => state.product.productList);
  return (
    <div className="Categories">
      <div className="left-side">
        <div className="image-icon">
          <img src="/Assets/Images/menu.png" alt="menu" />
        </div>
        <div className="item-list">
          <span className="cate">
            <h5>
              <b>Categories</b>
            </h5>
          </span>
          <span className="cate"></span>
          <span className="cate">
            <h6>
              <a href="#q1">Italian</a>
            </h6>
          </span>
          <span className="cate">
            <h6>
              <a href="#q2">Punjabi</a>
            </h6>
          </span>
          <span className="cate">
            <h6>
              <a href="#q3">Chinese</a>
            </h6>
          </span>
          <span className="cate">
            <h6>
              <a href="#q4">Dessert</a>
            </h6>
          </span>
        </div>
      </div>
      <div className="container-product">
        <div id="q1">
          <h4>Italian</h4>
          {items
            ?.filter((item) => {
              return item.category === 'Italian';
            })
            .map((item) => {
              return <Product item={item} key={item.id} />;
            })}
        </div>
        <div id="q2">
          <h4>Punjabi</h4>
          {items
            ?.filter((item) => {
              return item.category === 'Punjabi';
            })
            .map((item) => {
              return <Product item={item} key={item.id} />;
            })}
        </div>
        <div id="q3">
          <h4>Chineese</h4>
          {items
            ?.filter((item) => {
              return item.category === 'Chineese';
            })
            .map((item) => {
              return <Product item={item} key={item.id} />;
            })}
        </div>
        <div id="q4">
          <h4>Dessert</h4>
          {items
            ?.filter((item) => {
              return item.category === 'Dessert';
            })
            .map((item) => {
              return <Product item={item} key={item.id} />;
            })}
        </div>
      </div>
      <div className="offer">
        <img src="/Assets/Images/offer1.png" alt="offer1" className="i1" />
        <img src="/Assets/Images/offer2.png" alt="offer2" className="i2" />
      </div>
    </div>
  );
};

export default Products;
