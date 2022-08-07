import React from "react";
import {
  ProductCard,
  ShopTwoItems,
  ExploreShopBtn,
  ProductLink,
  RatingComp,
} from "./ProductCardStyle";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../Actions/CartAction";

const ProductCards = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const addToCart = (id, quantity) => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  return (
    <ProductCard>
      <ProductLink to={`/product/${product?._id}`}>
        <img src={product?.images?.[0]?.url} alt={product?.name} />
      </ProductLink>
      <ProductLink to={`/product/${product?._id}`}>
        <h4>{product?.name}</h4>
      </ProductLink>
      <ProductLink to={`/product/${product?._id}`}>
        <ShopTwoItems>
          <h5>
            <span>₹</span>
            {product?.price}
          </h5>
          <RatingComp value={product?.ratings} readOnly />
        </ShopTwoItems>
      </ProductLink>
      <ProductLink to={`/product/${product?._id}`}>
        <ShopTwoItems>
          <p>{product?.shopName?.city}</p>
          <p>{product?.shopName?.state}</p>
        </ShopTwoItems>
      </ProductLink>
      <ExploreShopBtn onClick={() => addToCart(product?._id, 1)}>
        Add to Cart
      </ExploreShopBtn>
    </ProductCard>
  );
};

export default ProductCards;
