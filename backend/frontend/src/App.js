import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import Header from './Layout/Header/Header';
import Shop from './routes/Shop/Shop';
import Footer from './Layout/Footer/Footer';
import Home from './routes/Home/Home';
import Product from './routes/Product/Product';
import Cart from './routes/Cart/Cart';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import ShopDetails from './routes/ShopDetail/ShopDetails';
import ProductDetails from './routes/ProductDetail/ProductDetails';
import store from './redux/store';
import { useEffect } from 'react';
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';
import Profile from './routes/Profile/Profile';

import Sellerboard from './seller/Dashboard/Sellerboard';
import ShopNew from './seller/Shops/New/ShopNew';
import ShopAll from './seller/Shops/All/ShopAll';

import Adminboard from './admin/Dashboard/Adminboard';
import AdminShops from './admin/Shops/AdminShop';
import AdminProducts from './admin/Products/AdminProduct';
import AdminUsers from './admin/Users/AdminUser';

function App() {

  
  const { user } = useSelector(state => state.user)
  

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
  
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            
            <Route path="/shops" element={<Shop /> }/>

            <Route path="/shops/:id" element={<ShopDetails /> }/>

            <Route path="/products" element={<Product /> }/>
   
            <Route path="/products/:id" element={<ProductDetails /> }/>
            
            <Route path="/cart" element={<Cart user={user}/> }/>

            <Route path="*" element={<ErrorPage /> }/>

            
            { user ? (
              <>
                <Route path="/profile" element={<Profile /> }/>
            
                <Route path="/seller/dashboard" element={<Sellerboard /> }/>
            
                <Route path="/seller/shop/new" element={<ShopNew /> }/>

                <Route path="seller/shops" element={<ShopAll />} />

            
                <Route path="/admin/dashboard" element={<Adminboard /> }/>
            
                <Route path='/admin/shops' element={<AdminShops /> } />

                <Route path="/admin/products" element={<AdminProducts /> }/>

                <Route path="/admin/users" element={<AdminUsers /> }/>
            </> 
            ) : (
              <>
              </>
            ) }
          
          </Routes>
          <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
