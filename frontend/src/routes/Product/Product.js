import React, { useEffect} from 'react';
import { MainContainer, TopContainer, CommonBtn, CardsContainer, FormContainer } from '../../GlobalStyle';
import ProductCards from '../../compoenents/ProductCards/ProductCards';
import Medadata from '../../Layout/Medadata';
import { products } from '../../constant/data'
import Sidebar from '../../compoenents/Sidebar/Sidebar';
import { RightContainer } from './ProductStyle';

const Product = () => {
  
  // const dispatch = useDispatch();

  // const { loading, error, products, productsCount } = useSelector(state => state.products);

  // useEffect(() => {
  //   if(error) {
  //     return alert.error(error);
  //   }
  //   dispatch(getProduct());
  // }, [dispatch, error, alert])

  return (
    <MainContainer bg='#d9ead3' horizontal='row'>
    
      <Medadata title='localMart - All Products' /> 
        <Sidebar />
      <RightContainer>
      <TopContainer>
        <h4>Products</h4>
          <FormContainer>
            <input type='text' placeholder='Search City' />
          </FormContainer>
      </TopContainer>
      <CardsContainer>
      {/* {
        products && products.map(product => (
          <ProductCards
              key={product.id}
              // product={product}
          /> 
        ))   
      } */}
      </CardsContainer>
      </RightContainer>
    </MainContainer>
  )
}

export default Product