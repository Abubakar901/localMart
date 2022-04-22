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



function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            
            <Route path="/shop" element={<Shop /> }/>

            <Route path="/shop/:id" element={<ShopDetails /> }/>

            <Route path="/product" element={<Product /> }/>
            
            <Route path="/cart" element={<Cart /> }/>

            <Route path="*" element={<ErrorPage /> }/>
          
          </Routes>
          <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
