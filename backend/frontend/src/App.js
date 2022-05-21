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
import Shipping from './routes/Shipping/Shipping';
import ConfirmOrder from './routes/ConfirmOrder/ConfirmOrder';
import Order from './routes/Orders/Order';
import OrderDetail from './routes/OrderDetail/OrderDetail';
import Payment from './routes/Payment/Payment';

import Sellerboard from './seller/Dashboard/Sellerboard';
import ShopNew from './seller/Shops/New/ShopNew';
import ShopAll from './seller/Shops/All/ShopAll';
import ProductAll from './seller/Products/All/ProductAll';
import ProductNew from './seller/Products/New/ProductNew';

import Adminboard from './admin/Dashboard/Adminboard';
import AdminShops from './admin/Shops/AdminShop';
import AdminProducts from './admin/Products/AdminProduct';
import AdminUsers from './admin/Users/AdminUser';
import AdminOrder from './admin/Orders/AdminOrder';

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

            <Route path="/shop/:id" element={<ShopDetails /> }/>

            <Route path="/products" element={<Product /> }/>
   
            <Route path="/product/:id" element={<ProductDetails /> }/>
            
            <Route path="/cart" element={<Cart user={user}/> }/>

            <Route path="*" element={<ErrorPage /> }/>

            
            { user ? (
              <>

                <Route path="/shipping" element={<Shipping /> } />

                <Route path="/order/confirm" element={<ConfirmOrder /> }/>
              
                <Route path="/process/payment" element={<Payment />} />
              
                <Route path="/orders" element={<Order user={user} /> }/>

                <Route path="/order/:id" element={<OrderDetail user={user} /> }/>

                <Route path="/profile" element={<Profile /> }/>
            
                <Route path="/seller/dashboard" element={<Sellerboard /> }/>
            
                <Route path="/seller/shop/new" element={<ShopNew /> }/>

                <Route path="seller/shops" element={<ShopAll />} />

                <Route path="seller/product/new" element={<ProductNew />} />

                <Route path="seller/products" element={<ProductAll />} />

            
                <Route path="/admin/dashboard" element={<Adminboard /> }/>
            
                <Route path='/admin/shops' element={<AdminShops /> } />

                <Route path="/admin/products" element={<AdminProducts /> }/>

                <Route path="/admin/orders" element={<AdminOrder /> }/>


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
