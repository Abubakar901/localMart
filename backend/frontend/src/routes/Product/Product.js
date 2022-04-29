import React, { useState, useEffect } from 'react';
import { MainContainer, TopContainer, CardsContainer, FormContainer, BottomContainer } from '../../GlobalStyle';
import ProductCards from '../../compoenents/ProductCards/ProductCards';
import Medadata from '../../Layout/Medadata';
import { states } from '../../constant/data'
import Sidebar from '../../compoenents/Sidebar/Sidebar';
import { RightContainer, FilterContainer, FilterCity, FilterLink } from './ProductStyle';
import { useSelector, useDispatch} from 'react-redux';
import { getProduct  } from '../../actions/productAction';
import Loader from '../../Layout/Loader/Loader';

const Product = () => {

  const [ query, setQuery] = useState("");
  const dispatch = useDispatch();
  const {products, loading } = useSelector((state)=>state.products);
 
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

const handleState = (stateName) => {
  console.log(stateName)
}

  return (
    <>
      {
        loading ? <Loader /> : 
        (
          <MainContainer>
            <Medadata title='localMart - All Products' /> 
              <FilterContainer>
                <FilterCity topRound='20px'>
                  {
                    states && states.map((state) => (
                      <FilterLink key={state.id} onClick={() => handleState(state.name)} >
                        {state.name}
                      </FilterLink>
                    ))
                  }
                </FilterCity>
                <FilterCity bottomRound='20px'>

              </FilterCity>
            </FilterContainer>
          <TopContainer>
            <h4>Products</h4>
            <FormContainer>
              <input type='text' placeholder='Search City' />
            </FormContainer>
        </TopContainer>
          <BottomContainer>
            <Sidebar />
            <RightContainer>
              <CardsContainer>
                {
                   products && products.filter((product) => product.name.toLowerCase().includes(query)).map(product => (
                  <ProductCards product={product}/>
                  ))   
                }
              </CardsContainer>
            </RightContainer>
          </BottomContainer>
        </MainContainer>
        )
      }
    </>
  )
}

export default Product