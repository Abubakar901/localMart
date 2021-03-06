import React from 'react';
import { FooterContainer, FooterLeft, FooterMain, FooterMiddle, FooterRight } from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
        
        <FooterLeft>
            <h6>Download our app</h6>
            <p>Download App for Android and IOS Mobile Phone</p>   
            <img src="./assests/app-store.png" alt="App-Stores Button" />
        </FooterLeft>

        <FooterMain>
            <h3>localMart</h3>
            <p>High Quality is our First Priority</p>
            <p>Copyrights 2022 &copy; Team</p>
        </FooterMain>

        <FooterMiddle>
            <a href="https://wa.me/9372409041">Become a Seller</a>
            <p>Contact Us</p>
            <p>Privacy</p>
            <p>Help</p>
        </FooterMiddle>

        <FooterRight>
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Youtube</a>
            <a href="https://www.youtube.com/">Facebook</a>
        </FooterRight>
    </FooterContainer>
  )
}

export default Footer