import React, { useState } from 'react'
import { MainContainer, TopContainer, BottomContainer } from '../../../GlobalStyle';
import { SellerMainContainer } from '../../SellerStyle';
import { SellerShopForm , FormTopContainer, FirstContainer, SecondContainer,EachContainer, ShopLabels, ShopInputs, ImageInputContainer, CreateShopBtn } from './ShopNewStyle';
import Sidebar from '../../components/Sidebar/Siderbar';
import { useDispatch, useSelector } from 'react-redux';
import {  } from '../../../actions/shopActions';

const ShopNew = () => {
    const dispatch = useDispatch();

    const [shopdetails, setShopDetails] = useState({
        shopName: "",
        shopContact:"",
        shopAddress: "",
        shopCity: "",
        shopState : "",
        shopCountry: "",
        shopCategory : "",
        shopPincode : ""
      });
      const [shopImage, setShopImage] = useState("/Shop.png");
      const [shopAvatarPreview, setShopAvatarPreview] = useState("./assests/Shop.png")

      const {  shopName, shopContact, shopAddress, shopCity, shopState, shopCountry, shopCategory, shopPincode } = shopdetails;


      const shopDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();
      
            reader.onload = () => {
              if (reader.readyState === 2) {
                setShopAvatarPreview(reader.result);
                setShopImage(reader.result);
              }
            };
      
            reader.readAsDataURL(e.target.files[0]);
          } else {
            setShopDetails({ ...shopdetails, [e.target.name]: e.target.value });
          }
      }

      const shopFormSubmit = (e) => {
        e.preventDefault();
          
          const myForm = new FormData();
    
          myForm.set("name", shopName);
          myForm.set(" contact", shopContact);  
          myForm.set("address", shopAddress);
          myForm.set("city", shopCity);
          myForm.set("state", shopState);
          myForm.set("country", shopCountry);
          myForm.set("category", shopCategory);
          myForm.set("pinCode", shopPincode);
          myForm.set("images", shopImage);
        //   dispatch((myForm));
      }

  return (
    <MainContainer innerspace='0'>
      <TopContainer equally='center'>-
          <h2>Add New Shop</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <SellerMainContainer>
            <SellerShopForm encType="multipart/form-data" onSubmit={shopFormSubmit}>
                <FormTopContainer>
                <FirstContainer>
                    <EachContainer>
                        <ShopLabels>Name : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Name' name='shopName' value={shopName} onChange={shopDataChange} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>Contact : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Contact Number' name='shopContact' value={shopContact} onChange={shopDataChange} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>City : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop City' name='shopCity' value={shopCity} onChange={shopDataChange} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>Country : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Country' name='shopCountry' value={shopCountry} onChange={shopDataChange} required />
                    </EachContainer>
                    

                </FirstContainer>
                
                <SecondContainer>

                
                    <EachContainer>
                        <ShopLabels>Category : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Category' name='shopCategory' value={shopCategory} onChange={shopDataChange} required />
                    </EachContainer>
                    
                    <EachContainer>
                        <ShopLabels>Address : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Address'  name='shopAddress' value={shopAddress} onChange={shopDataChange} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>State : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop State' name='shopState' value={shopState} onChange={shopDataChange} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>PinCode : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Area Pincode' name='shopPincode' value={shopPincode} onChange={shopDataChange} required />
                    </EachContainer>



                </SecondContainer>
                </FormTopContainer>

                <ImageInputContainer>
                    <ShopLabels>Upload Image : </ShopLabels>
                    <img src={shopAvatarPreview} alt='no imge' />
                    <ShopInputs type='file' name='avatar' accept="image/*"  onChange={shopDataChange} />
                </ImageInputContainer>

                <CreateShopBtn  value='submit' type='submit'>Create Shop</CreateShopBtn>
            </SellerShopForm>
        </SellerMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default ShopNew