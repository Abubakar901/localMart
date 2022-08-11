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
  ExploreShopBtn,
  ShoppingCard,
  ShopTwoItems,
  ShopLink,
  RatingComp,
  HomeProduct,
  ProductCard,
  ProductTwoItems,
  AddToCartBtn,
  ProductLink,
} from "./HomeStyle";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../../Layout/Loader/Loader";
import Metadata from "../../Layout/Metadata";
import { getHomeProducts, clearErrors } from "../../Actions/ProductAction";
import { getHomeShops } from "../../Actions/ShopAction";
import { useNavigate } from "react-router-dom";
import { addItemsToCart } from "../../Actions/CartAction";

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

  const redirectShop = (id) => {
    navigate(`/shop/${id}`);
  };

  const redirctToShopByProduct = (id) => {
    navigate(`/shop/products/${id}`);
  };
  const addToCart = (id, quantity) => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
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
                      <ShoppingCard>
                        <ShopLink to={`/shop/${shop?._id}`}>
                          <img src={shop?.images[0]?.url} alt={shop?.name} />
                        </ShopLink>
                        <ShopLink to={`/shop/${shop?._id}`}>
                          <h4>{shop?.name}</h4>
                        </ShopLink>
                        <ShopTwoItems>
                          <ShopLink to={`/shop/${shop?._id}`}>
                            <h5>{shop?.category}</h5>
                          </ShopLink>
                          <ShopLink to={`/shop/${shop?._id}`}>
                            <RatingComp value={shop?.ratings} readOnly />
                          </ShopLink>
                        </ShopTwoItems>
                        <ShopTwoItems>
                          <ShopLink to={`/shop/${shop?._id}`}>
                            <p> {shop?.city}</p>
                          </ShopLink>
                          <ShopLink to={`/shop/${shop?._id}`}>
                            <p>{shop?.state}</p>
                          </ShopLink>
                        </ShopTwoItems>
                        <ExploreShopBtn
                          bgcolor="#01796f"
                          onClick={() => redirectShop(shop?._id)}
                        >
                          Shop Details
                        </ExploreShopBtn>
                        <ExploreShopBtn
                          onClick={() => redirctToShopByProduct(shop?._id)}
                        >
                          Explore Products
                        </ExploreShopBtn>
                      </ShoppingCard>
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
                      <ProductCard>
                        <ProductLink to={`/product/${product?._id}`}>
                          <img
                            src={product?.images?.[0]?.url}
                            alt={product?.name}
                          />
                        </ProductLink>
                        <ProductLink to={`/product/${product?._id}`}>
                          <h4>{product?.name}</h4>
                        </ProductLink>
                        <ProductLink to={`/product/${product?._id}`}>
                          <ProductTwoItems>
                            <h5>
                              <span>₹</span>
                              {product?.price}
                            </h5>
                            <RatingComp value={product?.ratings} readOnly />
                          </ProductTwoItems>
                        </ProductLink>
                        <ProductLink to={`/product/${product?._id}`}>
                          <ProductTwoItems>
                            <p>{product?.shopName?.city}</p>
                            <p>{product?.shopName?.state}</p>
                          </ProductTwoItems>
                        </ProductLink>
                        <AddToCartBtn
                          onClick={() => addToCart(product?._id, 1)}
                        >
                          Add to Cart
                        </AddToCartBtn>
                      </ProductCard>
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
