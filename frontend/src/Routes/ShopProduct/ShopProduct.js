import React, { useState, useEffect } from "react";
import {
  ShopProductMainContainer,
  TopContainer,
  SearchSideContainer,
  ShopProductBottomContainer,
  NoProductFoundContainer,
} from "./ShopProductStyle";
import { useDispatch, useSelector } from "react-redux";
import { getProductByShop } from "../../Actions/ProductAction";
import { useParams } from "react-router-dom";
import Loader from "../../Layout/Loader/Loader";
import Metadata from "../../Layout/Metadata";
import { useAlert } from "react-alert";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ShopProduct = () => {
  const alert = useAlert();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    dispatch(getProductByShop(id));
  }, [dispatch, error, alert, id]);

  return (
    <ShopProductMainContainer>
      <Metadata
        title={`localMart - Products of ${products?.[0]?.shopName.name}`}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          {products && products[0] ? (
            <>
              <TopContainer>
                <h4>Products by Shop {products?.[0]?.shopName.name}</h4>
                <SearchSideContainer>
                  <input
                    type="text"
                    placeholder="Search Product"
                    onChange={(e) =>
                      setProductName(e.target.value.toLowerCase())
                    }
                  />
                </SearchSideContainer>
              </TopContainer>
              <ShopProductBottomContainer>
                {products &&
                  products
                    .filter((product) => product?.name?.includes(productName))
                    .map((product) => (
                      <ProductCard product={product} key={product?._id} />
                    ))}
              </ShopProductBottomContainer>
            </>
          ) : (
            <NoProductFoundContainer>
              <h1>Couldn't Find Any Products :(</h1>
              <h1>Check Your Internet Connection</h1>
              <h1>or Refresh the Page</h1>
            </NoProductFoundContainer>
          )}
        </>
      )}
    </ShopProductMainContainer>
  );
};

export default ShopProduct;
