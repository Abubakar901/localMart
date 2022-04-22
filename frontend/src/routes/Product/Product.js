import React from 'react';
import { MainContainer, TopContainer, CommonBtn, CardsContainer, FormContainer } from '../../GlobalStyle';
import ProductCards from '../../compoenents/ProductCards/ProductCards';
import Medadata from '../../Layout/Medadata';
import { products } from '../../constant/data'

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
        products && products.map(product => (
          <ProductCards
          //  product={product}
            key={product.id}
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