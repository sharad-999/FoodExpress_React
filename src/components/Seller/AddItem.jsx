import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './style/seller.css';
import { addProduct } from '../../redux/slice/productSlice';
import { successToast } from '../../helper/Toaster';

const AddItem = () => {
  const [product, setProduct] = useState({});
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addProduct({ ...product, id: Date.now() }));
    successToast('Product Added in Menu');
    Navigate('/menu');
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
                name="name"
                type="text"
                placeholder="Seller Name"
                className="input"
                onChange={(e) =>
                  setProduct({ ...product, seller: e.target.value })
                }
              />
              <br />
              <input
                name="product name"
                type="text"
                placeholder="Product Name"
                className="input"
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
              <br />
              <select
                id="catagory"
                placeholder="catagory"
                className="input"
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
                required
              >
                <option value="" selected disabled hidden>
                  Select Category
                </option>
                <option value="Italian">Italian</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Chineese">Chineese</option>
                <option value="Spanish">Spanish</option>
                <option value="Dessert">Dessert</option>
              </select>
              <br />
              <input
                name="price"
                type="text"
                placeholder="price"
                className="input"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
              <br />
              <input
                name="description"
                type="text"
                placeholder="description"
                className="input"
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
              <br />

              <label
                className="block mb-2 text-sm font-small text-gray-900"
                htmlFor="file_input"
              >
                Upload Product Image
              </label>
              <input
                className="block text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                className="mt-1 text-center text-sm text-gray-500"
                id="file_input_help"
              >
                OR
              </p>
              <input
                type="url"
                className="input"
                id="img"
                name="img"
                accept="*.jpg,*.png,*.jpeg"
                placeholder="Enter URL"
                onChange={(e) =>
                  setProduct({ ...product, img: e.target.value })
                }
              />
              <br />
              <button className="login-btn" type="button" onClick={handleAdd}>
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
