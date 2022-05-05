import React, { useState, useEffect } from 'react';
import {  MainContainer, TopContainer, FormContainer, CardsContainer, BottomContainer } from '../../GlobalStyle';
import { ShopFilterMenu, FilterLink } from './ShopStyle';
import ShopCard from '../../compoenents/ShopCard/ShopCard';
import Metadata from '../../Layout/Metadata';
import { getShop } from '../../actions/shopActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../Layout/Loader/Loader';
import { useAlert } from 'react-alert';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Shop = () => {
  
  const dispatch = useDispatch();

  const [ query, setQuery] = useState("");
  const [genres, setGenres] = useState("");
  const [page, setPage] = useState(1);

  const alert = useAlert();

  const { loading, error, shops, category } = useSelector(state => state.shops)

  useEffect(() => {
    if(error) {
      return alert.error(error);
    }
    dispatch(getShop(page));
  }, [dispatch, error, alert, page])

  const searchSubmitHandler = (e) => {
    e.preventDefault();
  }

  const handleType = (shopType) => {
    if(shopType === 'electronics') {
      setGenres(shopType)
    } else if (shopType === 'clothing') {
      setGenres(shopType)
    } else if (shopType === 'medicals') {
      setGenres(shopType)
    } else if (shopType === 'grocery') {
      setGenres(shopType)
    } else if (shopType === 'bakery') {
      setGenres(shopType)
    } else {
      setGenres('')
    }
  }

  console.log(category)
  return (
    <>
      {
        loading ? <Loader /> :
        (
          <MainContainer>
      
      <Metadata title='localMart - All Shops' />
      <ShopFilterMenu>

        {
          category?.map((cate) => (
            <FilterLink onClick={() => handleType(cate)}>
              {cate}
            </FilterLink>
          ))
        }

        <FilterLink onClick={() => handleType() } >
          Remove Filter
        </FilterLink>

      </ShopFilterMenu>
        <TopContainer>
          <h4>Shops</h4>
          <FormContainer onSubmit={searchSubmitHandler}  >
            <input type='text' placeholder='Search Shop Name or City' onChange={(e) => setQuery(e.target.value) } />
          </FormContainer>
        </TopContainer>
        <CardsContainer>
        {
            shops && shops.filter((shop) => (shop.city.toLowerCase().includes(query) || shop.name.toLowerCase().includes(query)) && shop.category.toLowerCase().includes(genres)).map(shop => (
                <ShopCard
                key={shop?._id}
                shop={shop}
              />
          ))
        }
        </CardsContainer>

        <BottomContainer>
          <Stack spacing={2}>
            <Pagination count={10 } color="primary" defaultPage={page} showFirstButton={true} showLastButton={true} onChange={(event, value) => setPage(value)}/>
          </Stack>
        </BottomContainer>
    </MainContainer>
        )
      }
    </>
  )
}

export default Shop