import React from 'react';
import { MainContainer, TopContainer, CommonBtn, CardsContainer, StyledLink } from '../../GlobalStyle';
import ProductCards from '../../compoenents/ProductCards/ProductCards';
import { products } from '../../constant/data';
import Medadata from '../../Layout/Medadata';

const Product = () => {
  return (
    <MainContainer>
    
      <Medadata title='localMart - All Products' /> 
      <TopContainer>
        <h4>Products</h4>
        <StyledLink to='/cart'>
          <CommonBtn>View Cart</CommonBtn>
        </StyledLink>
      </TopContainer>
      <CardsContainer>
      {
        products.map(product => (
          <ProductCards
            id={product.id}
            title={product.title}
            url={product.url}
            price={product.price}
          />
        ))   
      }
      </CardsContainer>
    </MainContainer>
  )
}

export default Product