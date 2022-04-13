import React from 'react';
import {  MainContainer, TopContainer, FormContainer, CommonBtn, CardsContainer} from '../../GlobalStyle';
import ShopCard from '../../compoenents/ShopCard/ShopCard';
import { shops } from '../../constant/data';
import Medadata from '../../Layout/Medadata';

const Shop = () => {
  return (
    <MainContainer>
      
      <Medadata title='localMart - All Shops' />
        <TopContainer>
          <h4>Shops</h4>
          <FormContainer>
            <input type='text' placeholder='Search City' />
            <CommonBtn>Search</CommonBtn>
          </FormContainer>
        </TopContainer>
        <CardsContainer>
        {
            shops.map(shop => (
                <ShopCard
                key={shop.id}
                id={shop.id}
                url={shop.url}
                category={shop.category}
                shopName={shop.shopName}
                shopAddress={shop.shopAddress}
                rating={shop.rating}
              />
          ))
        }
        </CardsContainer>
    </MainContainer>

    
  )
}

export default Shop