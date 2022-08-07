import React, { useState } from "react";
import {
  SidebarContainer,
  ResponsiveBtn,
  Heading,
  SideLink,
  SideContent,
  InnerLink,
} from "./SidebarStyle";

const Sidebar = () => {
  // responsive variables
  const [display, setDisplay] = useState("none");
  const [responsiveBar, setResponsiveBar] = useState(true);
  const [SideBar, setSideBar] = useState("60px");
  const [animation, setAnimation] = useState("");
  const [textAnimation, setTextAnimation] = useState("");
  const [textOpacity, setTextOpacity] = useState("0");

  // handle responsive bar
  const handleSidePanel = () => {
    setResponsiveBar(!responsiveBar);
    if (responsiveBar) {
      setDisplay("flex");
      setAnimation("animateOut");
      setSideBar("220px");
      setTextAnimation("fadeIn");
      setTextOpacity("1");
    } else {
      setDisplay("none");
      setSideBar("60px");
      setAnimation("animateIn");
      setTextAnimation("fadeOut");
      setTextOpacity("0");
    }
  };

  return (
    <SidebarContainer show={SideBar} animation={animation}>
      <ResponsiveBtn onClick={() => handleSidePanel()}>
        <span></span>
        <span></span>
        <span></span>
      </ResponsiveBtn>
      <Heading
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        LocalMart
      </Heading>

      <SideLink
        to="/seller/dashboard"
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        Dashboard
      </SideLink>

      <SideContent
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        <h5>Shops</h5>
        <InnerLink
          to="/seller/shop/new"
          textanimation={textAnimation}
          textopacity={textOpacity}
          view={display}
        >
          Add Shop
        </InnerLink>
        <InnerLink
          to="/seller/shops"
          textanimation={textAnimation}
          textopacity={textOpacity}
          view={display}
        >
          All Shops
        </InnerLink>
      </SideContent>

      <SideContent
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        <h5>Products</h5>
        <InnerLink
          to="/seller/product/new"
          textanimation={textAnimation}
          textopacity={textOpacity}
          view={display}
        >
          Add Product
        </InnerLink>
        <InnerLink
          to="/seller/products"
          textanimation={textAnimation}
          textopacity={textOpacity}
          view={display}
        >
          All Products
        </InnerLink>
      </SideContent>

      <SideLink
        to="/seller/orders"
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        Orders
      </SideLink>
    </SidebarContainer>
  );
};

export default Sidebar;
