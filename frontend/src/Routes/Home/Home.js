import React, { useEffect } from "react";
import {
  HomeContainer,
  HomeMain,
  HomeLeft,
  HomeImage,
  HomeButton,
  HomeMixedContainer,
  HomeTopContainer,
  HomeShop,
  HomeProduct,
} from "./HomeStyle";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../../Layout/Loader/Loader";
import Metadata from "../../Layout/Metadata";
import { getHomeProducts, clearErrors } from "../../Actions/ProductAction";
import { getHomeShops } from "../../Actions/ShopAction";
import ShopCard from "../../Components/ShopCard/ShopCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const {
    loading: ShopLoading,
    error: ShopError,
    shops,
  } = useSelector((state) => state.shops);

  const {
    products,
    loading: ProductLoading,
    error: ProductError,
  } = useSelector((state) => state.products);

  const navigateShops = () => {
    navigate("/shops");
  };

  const navigateProducts = () => {
    navigate("/products");
  };

  useEffect(() => {
    if (ShopError) {
      alert.error(ShopError);
      dispatch(clearErrors());
    }

    if (ProductError) {
      alert.error(ProductError);
      dispatch(clearErrors());
    }

    dispatch(getHomeShops());
    dispatch(getHomeProducts());
  }, [dispatch, alert, ShopError, ProductError]);

  return (
    <HomeContainer>
      <Metadata title="localMart - Home" />
      {ShopLoading ? (
        <Loader />
      ) : (
        <>
          {ProductLoading ? (
            <Loader />
          ) : (
            <>
              {" "}
              <HomeMain>
                <HomeLeft>
                  <h3>
                    Checkout Shops, Products & Order things from around you.
                  </h3>
                  <HomeButton onClick={navigateShops}>Explore Shops</HomeButton>
                  <HomeButton onClick={navigateProducts}>
                    Explore Products
                  </HomeButton>
                </HomeLeft>
                <HomeImage
                  src="./assests/grocery-shopping.jpg"
                  alt="Home Image"
                />
              </HomeMain>
              <HomeMixedContainer>
                <HomeTopContainer>
                  <h4>Top Shops</h4>
                </HomeTopContainer>
                <HomeShop>
                  {shops &&
                    shops.map((shop) => (
                      <ShopCard key={shop?._id} shop={shop} />
                    ))}{" "}
                </HomeShop>
              </HomeMixedContainer>
              <HomeMixedContainer>
                <HomeTopContainer>
                  <h4>Top Products</h4>
                </HomeTopContainer>
                <HomeProduct>
                  {products &&
                    products.map((product) => (
                      <ProductCard product={product} key={product?._id} />
                    ))}
                </HomeProduct>
              </HomeMixedContainer>
            </>
          )}
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
