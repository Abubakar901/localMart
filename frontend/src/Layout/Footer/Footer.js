import React from "react";
import {
  FooterContainer,
  FooterLeft,
  FooterMain,
  FooterMiddle,
  FooterRight,
  Container,
} from "./FooterStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <h6>About Us</h6>
        <h6>Contact Us</h6>
        <h6>FAQs</h6>
      </FooterLeft>

      <FooterMain>
        <h4>localMart</h4>
        <p>Copyrights 2022 &copy; Team</p>
      </FooterMain>

      <FooterMiddle>
        <a href="https://wa.me/9372409041">Become a Seller</a>
        <h6>Privacy</h6>
        <h6>Security</h6>
      </FooterMiddle>

      <FooterRight>
        <h4>Follow Us</h4>
        <Container>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.facebook.com/">Youtube</a>
        </Container>
        <Container>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://www.youtube.com/">Facebook</a>
        </Container>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
