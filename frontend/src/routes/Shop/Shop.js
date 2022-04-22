import React, { useState, useEffect } from 'react';
import { useSearchParams  } from 'react-router-dom';
import {  MainContainer, TopContainer, FormContainer, CommonBtn, CardsContainer} from '../../GlobalStyle';
import { ShopFilterMenu, FilterLink } from './ShopStyle';
import ShopCard from '../../compoenents/ShopCard/ShopCard';
import Medadata from '../../Layout/Medadata';
import { getShop } from '../../actions/shopActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../Layout/Loader/Loader';
import { useAlert } from 'react-alert';


const Shop = () => {
  
  const dispatch = useDispatch();

  const [ query, setQuery] = useState("");

  const alert = useAlert();
  
  const [ searchParams, setSearchParams] = useSearchParams(); 


  const { loading, error, shops, shopsCount } = useSelector(state => state.shops)
  
  useEffect(() => {
    if(error) {
      return alert.error(error);
    }
    dispatch(getShop());
  }, [dispatch, error, alert])

  const searchSubmitHandler = (e) => {
    e.preventDefault();
  }

  const handleElectronics = () => {
    shops.filter((shop) => shop.category.includes("electronics"))
  }
  

  return (
    <>
      {
        loading ? <Loader /> :
        (
          <MainContainer>
      
      <Medadata title='localMart - All Shops' />
      <ShopFilterMenu>

        <FilterLink onClick={handleElectronics}>
          Electronics
        </FilterLink>
            
        <FilterLink>
          Clothing
        </FilterLink>

        <FilterLink >
          Medicals
        </FilterLink>

        <FilterLink >
          Groceries
        </FilterLink>

      </ShopFilterMenu>
        <TopContainer>
          <h4>Shops</h4>
          <FormContainer onSubmit={searchSubmitHandler}  >
            <input type='text' placeholder='Search City' onChange={(e) => setQuery(e.target.value) } />
            <CommonBtn type='submit' value='search'>Search</CommonBtn>
          </FormContainer>
        </TopContainer>
        <CardsContainer>
        {
            shops && shops.filter((shop) => shop.city.toLowerCase().includes(query)).map(shop => (
                <ShopCard
                key={shop.id}
                shop={shop}
              />
          ))
        }
        </CardsContainer>
    </MainContainer>
        )
      }
    </>
  )
}

export default Shop