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
