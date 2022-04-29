import React from 'react'
import { MainContainer, TopContainer, BottomContainer } from '../../../GlobalStyle';
import { SellerMainContainer } from '../../SellerStyle';
import { SellerShopForm , FormTopContainer, FirstContainer, SecondContainer,EachContainer, ShopLabels, ShopInputs, ImageInputContainer, CreateShopBtn } from './ShopNewStyle';
import Sidebar from '../../components/Sidebar/Siderbar';

const ShopNew = () => {
  return (
    <MainContainer innerspace='0'>
      <TopContainer equally='center'>-
          <h2>Add New Shop</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <SellerMainContainer>
            <SellerShopForm>
                <FormTopContainer>
                <FirstContainer>
                    <EachContainer>
                        <ShopLabels>Name : </ShopLabels>
                        <ShopInputs />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>Contact : </ShopLabels>
                        <ShopInputs />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>City : </ShopLabels>
                        <ShopInputs/>
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>Country : </ShopLabels>
                        <ShopInputs></ShopInputs>
                    </EachContainer>
                    

                </FirstContainer>
                
                <SecondContainer>

                
                    <EachContainer>
                        <ShopLabels>Category : </ShopLabels>
                        <ShopInputs />
                    </EachContainer>
                    
                    <EachContainer>
                        <ShopLabels>Address : </ShopLabels>
                        <ShopInputs></ShopInputs>
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>State : </ShopLabels>
                        <ShopInputs></ShopInputs>
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>PinCode : </ShopLabels>
                        <ShopInputs></ShopInputs>
                    </EachContainer>



                </SecondContainer>
                </FormTopContainer>

                <ImageInputContainer>
                    <ShopLabels>Upload Image : </ShopLabels>
                    <img src='https://media-cdn.tripadvisor.com/media/photo-s/06/17/c7/3f/item-shop.jpg' />
                    <ShopInputs />
                </ImageInputContainer>
                
            {/* "name" : "jugaad",
    "contact" : "9353636535",
    "address" : "shop no. 105, idk road",
    "city" : "kolkata",
    "state" : "west bengal",
    "country" : "india",
    "category" : "electronics",
    "pinCode" : 832953,
    "images" : {
        "public_id" : "sample id 1",
        "url" : "sample url 1"
    } */}
    <CreateShopBtn>Create Shop</CreateShopBtn>
            </SellerShopForm>
        </SellerMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default ShopNew