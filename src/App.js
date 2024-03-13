import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import ProtectedUserRoute from '../src/utils/protectedUserRoute';
import ProtectedSellerRoute from '../src/utils/protectedSellerRoute';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Product/Products';
import Cart from './components/Cart/Cart';
import AddItem from './components/Seller/AddItem';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Products />} />
              <Route element={<ProtectedUserRoute />}>
                <Route path="/cart" element={<Cart />} />
                <Route element={<ProtectedSellerRoute />}>
                  <Route path="/seller" element={<AddItem />} />
                </Route>
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
