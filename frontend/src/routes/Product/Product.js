import React, { useEffect } from 'react';
import { MainContainer, TopContainer, CommonBtn, CardsContainer, FormContainer } from '../../GlobalStyle';
import ProductCards from '../../compoenents/ProductCards/ProductCards';
import { products } from '../../constant/data';
import Medadata from '../../Layout/Medadata';


const Product = () => {
  
  return (
    <MainContainer bg='#d9ead3'>
    
      <Medadata title='localMart - All Products' /> 
      <TopContainer>
        <h4>Products</h4>
          <FormContainer>
            <input type='text' placeholder='Search City' />
            <CommonBtn>Search</CommonBtn>
          </FormContainer>
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