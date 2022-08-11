import React, { useState } from "react";
import {
  SidebarContainer,
  ResponsiveBtn,
  Heading,
  SideLink,
} from "./SidebarStyle";

const Sidebar = () => {
  // responsive variables
  const [display, setDisplay] = useState("none");
  const [responsiveBar, setResponsiveBar] = useState(true);
  const [SideBarWidth, setSideBarWidth] = useState("0");
  const [SideBarHeight, setSideBarHeight] = useState("0");
  const [animation, setAnimation] = useState("");
  const [textAnimation, setTextAnimation] = useState("");
  const [textOpacity, setTextOpacity] = useState("0");

  // handle responsive bar
  const handleSidePanel = () => {
    setResponsiveBar(!responsiveBar);
    if (responsiveBar) {
      setDisplay("flex");
      setAnimation("animateOut");
      setSideBarWidth("200px");
      setSideBarHeight("380px");
      setTextAnimation("fadeIn");
      setTextOpacity("1");
    } else {
      setDisplay("none");
      setSideBarWidth("0");
      setSideBarHeight("0");
      setAnimation("animateIn");
      setTextAnimation("fadeOut");
      setTextOpacity("0");
    }
  };

  return (
    <SidebarContainer
      height={SideBarHeight}
      width={SideBarWidth}
      animation={animation}
    >
      <ResponsiveBtn onClick={() => handleSidePanel()}>
        <span> </span> <span> </span> <span> </span>{" "}
      </ResponsiveBtn>{" "}
      <Heading
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        LocalMart{" "}
      </Heading>
      <SideLink
        to="/admin/dashboard"
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        Dashboard{" "}
      </SideLink>
      <SideLink
        to="/admin/shops"
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        Shops{" "}
      </SideLink>
      <SideLink
        to="/admin/products"
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        Products{" "}
      </SideLink>
      <SideLink
        to="/admin/orders"
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        Orders{" "}
      </SideLink>
      <SideLink
        to="/admin/users"
        textanimation={textAnimation}
        textopacity={textOpacity}
        view={display}
      >
        Users{" "}
      </SideLink>{" "}
    </SidebarContainer>
  );
};

export default Sidebar;
