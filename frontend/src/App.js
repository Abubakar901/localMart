import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "./Actions/UserAction";
import { useAlert } from "react-alert";
import store from "./Redux/Store";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Home from "./Routes/Home/Home";
import Shops from "./Routes/Shops/Shops";
import ShopProduct from "./Routes/ShopProduct/ShopProduct";
import Products from "./Routes/Products/Products";
import ProductDetail from "./Routes/ProductDetail/ProductDetail";
import Cart from "./Routes/Cart/Cart";
import Login from "./Routes/Login/Login";
import ErrorPage from "./Routes/ErrorPage/ErrorPage";
import Shipping from "./Routes/Shipping/Shipping";
import Profile from "./Routes/Profile/Profile";
import ConfirmOrder from "./Routes/ConfirmOrder/ConfirmOrder";
import Adminboard from "./Admin/Dashboard/Adminboard";
import Sellerboard from "./Seller/Dashboard/Sellerboard";
import AdminShops from "./Admin/Shops/AdminShops";
import AdminProducts from "./Admin/Products/AdminProducts";
import AdminOrders from "./Admin/Orders/AdminOrders";
import AdminUsers from "./Admin/Users/AdminUsers";
import UserDetails from "./Admin/UserDetails/UserDetails";
import AdminOrderDetail from "./Admin/OrderDetails/AdminOrderDetail";
import Orders from "./Routes/Orders/Orders";
import ShopDetail from "./Routes/ShopDetail/ShopDetail";
import NewShop from "./Seller/Shops/New/NewShop";
import AllShop from "./Seller/Shops/All/AllShop";
import EditShop from "./Seller/Shops/Edit/EditShop";
import NewProduct from "./Seller/Products/New/NewProduct";
import AllProducts from "./Seller/Products/All/AllProducts";
import EditProduct from "./Seller/Products/Edit/EditProduct";
import SellerOrders from "./Seller/Orders/SellerOrders";
import SellerOrderDetail from "./Seller/OrderDetails/SellerOrderDetail";
import ForgotPassword from "./Routes/ForgotPassword/ForgotPassword";
import ResetPassword from "./Routes/ResetPassword/ResetPassword";

function App() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, [dispatch, alert]);

  return (
    <BrowserRouter>
      <Helmet>
        <style>{"body { background-color: #cfe2f3 }"}</style>
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/shops"
          element={
            <>
              <Header />
              <Shops />
              <Footer />
            </>
          }
        />

        <Route
          path="/shop/:id"
          element={
            <>
              <Header />
              <ShopDetail user={user} />
              <Footer />
            </>
          }
        />

        <Route
          path="/shop/products/:id"
          element={
            <>
              <Header />
              <ShopProduct />
              <Footer />
            </>
          }
        />

        <Route
          path="/products"
          element={
            <>
              <Header />
              <Products />
              <Footer />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={
            <>
              <Header />
              <ProductDetail user={user} />
              <Footer />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart user={user} />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/forgot/password" element={<ForgotPassword />} />

        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route
          path="*"
          element={
            <>
              <Header />
              <ErrorPage />
              <Footer />
            </>
          }
        />

        {user ? (
          <>
            <Route
              path="/shipping"
              element={
                <>
                  <Header />
                  <Shipping />
                  <Footer />
                </>
              }
            />

            <Route
              path="/profile"
              element={
                <>
                  <Header />
                  <Profile user={user} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/order/confirm"
              element={
                <>
                  <Header />
                  <ConfirmOrder user={user} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/orders"
              element={
                <>
                  <Header />
                  <Orders />
                  <Footer />
                </>
              }
            />
          </>
        ) : (
          <Route
            path="*"
            element={
              <>
                <Header />
                <ErrorPage />
                <Footer />
              </>
            }
          />
        )}

        {user?.role === "seller" ? (
          <>
            <Route
              path="/seller/dashboard"
              element={
                <>
                  <Header />
                  <Sellerboard />
                  <Footer />
                </>
              }
            />

            <Route
              path="/seller/shop/new"
              element={
                <>
                  <Header />
                  <NewShop />
                  <Footer />
                </>
              }
            />

            <Route
              path="/seller/shops"
              element={
                <>
                  <Header />
                  <AllShop />
                  <Footer />
                </>
              }
            />

            <Route
              path="/seller/shop/:id"
              element={
                <>
                  <Header />
                  <EditShop />
                  <Footer />
                </>
              }
            />

            <Route
              path="/seller/product/new"
              element={
                <>
                  <Header />
                  <NewProduct />
                  <Footer />
                </>
              }
            />

            <Route
              path="/seller/products"
              element={
                <>
                  <Header />
                  <AllProducts />
                  <Footer />
                </>
              }
            />

            <Route
              path="/seller/product/:id"
              element={
                <>
                  <Header />
                  <EditProduct />
                  <Footer />
                </>
              }
            />

            <Route
              path="/seller/orders"
              element={
                <>
                  <Header />
                  <SellerOrders />
                  <Footer />
                </>
              }
            />

            <Route
              path="/seller/order/:id"
              element={
                <>
                  <Header />
                  <SellerOrderDetail />
                  <Footer />
                </>
              }
            />
          </>
        ) : (
          <Route
            path="*"
            element={
              <>
                <Header />
                <ErrorPage />
                <Footer />
              </>
            }
          />
        )}

        {user?.role === "admin" ? (
          <>
            <Route
              path="/admin/dashboard"
              element={
                <>
                  <Header />
                  <Adminboard />
                  <Footer />
                </>
              }
            />

            <Route
              path="/admin/shops"
              element={
                <>
                  <Header />
                  <AdminShops />
                  <Footer />
                </>
              }
            />

            <Route
              path="/admin/products"
              element={
                <>
                  <Header />
                  <AdminProducts />
                  <Footer />
                </>
              }
            />

            <Route
              path="/admin/orders"
              element={
                <>
                  <Header />
                  <AdminOrders />
                  <Footer />
                </>
              }
            />

            <Route
              path="/admin/order/:id"
              element={
                <>
                  <Header />
                  <AdminOrderDetail />
                  <Footer />
                </>
              }
            />

            <Route
              path="/admin/users"
              element={
                <>
                  <Header />
                  <AdminUsers />
                  <Footer />
                </>
              }
            />

            <Route
              path="/admin/user/:id"
              element={
                <>
                  <Header />
                  <UserDetails />
                  <Footer />
                </>
              }
            />
          </>
        ) : (
          <Route
            path="*"
            element={
              <>
                <Header />
                <ErrorPage />
                <Footer />
              </>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
