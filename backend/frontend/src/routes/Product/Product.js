import React, { useState, useEffect } from 'react';
import { MainContainer, TopContainer, CardsContainer, FormContainer, BottomContainer } from '../../GlobalStyle';
import ProductCards from '../../compoenents/ProductCards/ProductCards';
import Metadata from '../../Layout/Metadata';
import { RightContainer, FilterContainer, FilterCity, FilterLink, MixContainer, SideBarContainer, InnerContainer   } from './ProductStyle';
import { useSelector, useDispatch} from 'react-redux';
import { getProduct } from '../../actions/productAction';
import Loader from '../../Layout/Loader/Loader';
import { State, City }  from 'country-state-city';

const Product = () => {

  const [ query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [state, setState] = useState()
  const [city, setCity] = useState("Mumbai");
  const [typeCategory, setTypeCategory ] = useState("");
  const {products, category, loading } = useSelector((state)=>state.products);
  const states = State.getStatesOfCountry("IN")
  let cities = City.getCitiesOfState("IN", state)

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

 const handleState = (stateCode) => {
  setState(stateCode)
} 

const handleCity = (cityName) => {
  setCity(cityName)
}
  
  const checkCategory = (categoryType) => {
    if(categoryType === undefined){
      return ""
    } else {
      setTypeCategory(categoryType)
    }
  }

   console.log(products)
  return (
    <>
      {
        loading ? <Loader /> : 
        (
          <MainContainer>
            <Metadata title='localMart - All Products' /> 
              <FilterContainer>
                <FilterCity topRound='20px'>
                {
                    states && states.map((state) => (
                      <FilterLink key={state.name} onClick={() => handleState(state.isoCode)} >
                        {state.name}
                      </FilterLink>
                    ))
                  }
                </FilterCity>
                <FilterCity bottomRound='20px'>
                {
                    cities && cities.map((citie) => (
                      <FilterLink key={citie.name} onClick={() => handleCity(citie.name)}>
                        {citie.name}
                      </FilterLink>
                    ))
                  }
              </FilterCity>
            </FilterContainer>
          <TopContainer>
            <h4>Products</h4>
            <FormContainer>
              <input type='text' placeholder='Search Product' onChange={(e) => setQuery(e.target.value)} />
            </FormContainer>
        </TopContainer>
          <MixContainer>
          
            <SideBarContainer>
          {
            category && category.map((cate) => (
              <InnerContainer>
                 <p onClick={() => checkCategory(cate)} key={cate} >
                    {cate}
                 </p>
              </InnerContainer>
            ))
          }
          
            <InnerContainer>
                 <p onClick={() => checkCategory("")} >Remove Filter</p>
            </InnerContainer>
          </SideBarContainer>
            <RightContainer>
              <CardsContainer>
                {
                   products && products.filter((product) => product.name.toLowerCase().includes(query) && product.category.includes(typeCategory)).map(product => (
                  <ProductCards product={product} key={product._id} />
                  ))   
                }
              </CardsContainer>
            </RightContainer>
          </MixContainer>
          <BottomContainer>
            
          </BottomContainer>
        </MainContainer>
        )
      }
    </>
  )
}

export default Product