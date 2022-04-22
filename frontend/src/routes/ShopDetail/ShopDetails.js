import React, { useEffect} from 'react';
import ImageCarousel from '../../compoenents/ImageCarousel/ImageCarousel';
import Carousel from 'react-material-ui-carousel';
import { MainContainer, TopContainer } from '../../GlobalStyle';
import { OtherContainer, LeftContainer } from './ShopDetailsStyle'; 
import { useSelector, useDispatch } from 'react-redux';
import { getShopDetails } from '../../actions/shopActions';
import { useParams } from 'react-router-dom';

const ShopDetails = () => {

  const dispatch = useDispatch();
  const params = useParams();

  const { shop, loading, error } = useSelector(state => state.shopDetails)

  useEffect(() => {
    dispatch(getShopDetails(params.id));
  }, [dispatch])
  
  console.log(params)
  return (
    <MainContainer vertical='row' equally='space-around'>
        <LeftContainer>
           <Carousel> 
            { /*}
            {
              shop.images && shop.images.map((item, i) => (
                <img key={item.url}
                  src={item.url}
                  alt={`${i} Slide`} />

              ))
            } */}
          </Carousel>
        </LeftContainer>
        <OtherContainer>

        </OtherContainer>
    </MainContainer>
  )
}

export default ShopDetails