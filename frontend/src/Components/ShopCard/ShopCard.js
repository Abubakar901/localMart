import React from "react";
import {
  ExploreShopBtn,
  ShoppingCard,
  ShopTwoItems,
  ShopLink,
  RatingComp,
} from "./ShopCardStyle";
import { useNavigate } from "react-router-dom";

const ShopCard = ({ shop }) => {
  const navigate = useNavigate();

  const redirectShop = (id) => {
    navigate(`/shop/${id}`);
  };

  const redirctToShopByProduct = (id) => {
    navigate(`/shop/products/${id}`);
  };

  return (
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
      <ExploreShopBtn bgcolor="#01796f" onClick={() => redirectShop(shop?._id)}>
        Shop Details
      </ExploreShopBtn>
      <ExploreShopBtn onClick={() => redirctToShopByProduct(shop?._id)}>
        Explore Products
      </ExploreShopBtn>
    </ShoppingCard>
  );
};

export default ShopCard;
