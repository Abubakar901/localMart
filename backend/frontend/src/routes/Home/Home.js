  import React from 'react';
  import { CommonBtn, TopContainer } from '../../GlobalStyle';
  import { HomeContainer, ShopCardContainer, ShopCarousel, StyledLink } from './HomeStyle';
  import Banner from '../../compoenents/Banner/Banner';
  import Slider from '../../compoenents/Slider/Slider';
  import Metadata from '../../Layout/Metadata';
  import { shops } from '../../constant/data';
  
  const Home = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (
      <HomeContainer>

      <Metadata title='localMart - Home' />
        <Banner />

        <ShopCardContainer>
          <TopContainer>
            <h4>Best Shops</h4>
            <StyledLink to='/shop'>
              <CommonBtn>Explore Shops</CommonBtn>
            </StyledLink>
          </TopContainer>

          <ShopCarousel responsive={responsive} infinite={true} autoPlay draggable={false} swipeable={false} centerMode={true} removeArrowOnDeviceType={["tablet", "mobile"]}
            temClass="carousel-item-padding-40-px"  containerClass="carousel-container">
              {
                shops && shops.map(shop => (
                <StyledLink to='shopDetails' key={shop.id} >
                  <Slider 
                    id={shop.id}
                    url={shop.url}
                    category={shop.category}
                    shopName={shop.shopName}
                    shopAddress={shop.shopAddress}
                    rating={shop.rating}
                  />
                  </StyledLink>
                ))
              }
          </ShopCarousel>
        </ShopCardContainer>
      </HomeContainer>
    )
  }

  export default Home