import React, { useState, useEffect } from "react";
import {
  MainContainer,
  CartTopContainer,
  CartMainContainer,
  CartLeftContainer,
  CartProductContainer,
  OneContainer,
  BtnContainer,
  SameBtn,
  TwoContainer,
  RemoveItemBtn,
  CartRightContainer,
  TotalCardContainer,
  CheckoutBtn,
  NoItemContaiener,
  NoItemBtn,
} from "./CartStyle";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import Metadata from "../../Layout/Metadata";
import { addItemsToCart, removeItemsFromCart } from "../../Actions/CartAction";
import CartCard from "../../Components/CartCard/CartCard";

const Cart = ({ user }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [totalGross, setTotalGross] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);

  const redirectToProducts = () => {
    navigate("/products");
  };

  const increaseQunatity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQunatity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const RemoveProductFromCart = (id) => {
    dispatch(removeItemsFromCart(id));
    alert.success("Product Removed from Cart");
  };

  const redirectToShipping = () => {
    if (user) {
      navigate("/shipping");
    } else {
      navigate("/login?redirect=shipping");
    }
  };

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      return (total += item?.quantity * item?.price);
    });
    setTotalGross(total);
  }, [cartItems]);

  return (
    <MainContainer>
      <Metadata title="localMart - My Cart" />
      {cartItems && cartItems[0] ? (
        <>
          <CartTopContainer>
            <h4>My Cart</h4>
          </CartTopContainer>
          <CartMainContainer>
            <CartLeftContainer>
              {cartItems &&
                cartItems.map((item) => (
                  <CartProductContainer key={item?.product}>
                    <CartCard item={item} />
                    <OneContainer>
                      <BtnContainer>
                        <SameBtn
                          onClick={() =>
                            decreaseQunatity(item?.product, item?.quantity)
                          }
                        >
                          -
                        </SameBtn>
                        <p>{item?.quantity}</p>
                        <SameBtn
                          onClick={() =>
                            increaseQunatity(
                              item?.product,
                              item?.quantity,
                              item?.stock
                            )
                          }
                        >
                          +
                        </SameBtn>
                      </BtnContainer>
                    </OneContainer>
                    <TwoContainer>
                      <p>Total Price : ₹ {item?.quantity * item?.price} </p>
                      <RemoveItemBtn
                        onClick={() => RemoveProductFromCart(item?.product)}
                      >
                        Remove From Cart
                      </RemoveItemBtn>
                    </TwoContainer>
                  </CartProductContainer>
                ))}
            </CartLeftContainer>
            <CartRightContainer>
              <TotalCardContainer>
                <h4>Total Items : {cartItems.length} </h4>
                <h5>Total Amount : ₹ {totalGross}</h5>
                <CheckoutBtn onClick={redirectToShipping}>
                  Procced to Checkout
                </CheckoutBtn>
              </TotalCardContainer>
            </CartRightContainer>
          </CartMainContainer>
        </>
      ) : (
        <NoItemContaiener>
          No Items in cart
          <NoItemBtn onClick={redirectToProducts}>Add Items to Cart</NoItemBtn>
        </NoItemContaiener>
      )}
    </MainContainer>
  );
};

export default Cart;
