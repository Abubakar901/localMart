import React from "react";
import { StyledLink, OneContainer, CombineContainer } from "./CartCardStyle";

const CartCard = ({ item }) => {
  return (
    <StyledLink to={`/product/${item?.product}`}>
      <img src={item?.image} alt={item?.name} />

      <OneContainer>
        <CombineContainer>
          <h4>Product : {item?.name}</h4>
          <h5>
            Price :<strong> ₹</strong>
            {item?.price}
          </h5>
        </CombineContainer>

        <CombineContainer>
          <h6>Delivery : {item?.delivery}</h6>
          <h6>Shop City : {item?.shopCity}</h6>
        </CombineContainer>
      </OneContainer>
    </StyledLink>
  );
};

export default CartCard;
