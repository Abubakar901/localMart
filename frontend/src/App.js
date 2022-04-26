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
import store from './redux/store';
import { useEffect } from 'react';
import { loadUser } from './actions/userAction';
import Sellerboard from './seller/SellerBoard/Sellerboard';
import Adminboard from './admin/AdminBoard/Adminboard';

function App() {

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
            
            <Route path="/cart" element={<Cart /> }/>

            <Route path="*" element={<ErrorPage /> }/>

            
            <Route path="/seller/dashboard" element={<Sellerboard /> }/>

            
            <Route path="/admin/dashboard" element={<Adminboard /> }/>
          
          </Routes>
          <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
