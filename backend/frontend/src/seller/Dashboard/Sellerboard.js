import React, { useEffect } from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import { AdminInnerContainer , AmountContainer, CircleContainer, CircleLinked } from './SellerboardStyle';
import Sidebar from '../components/Sidebar/Siderbar';
import Metadata from '../../Layout/Metadata';
import { getSellerProducts } from '../../actions/productAction';
import { getSellerShops } from '../../actions/shopActions';
import  { useSelector, useDispatch} from 'react-redux'; 
import { useAlert } from 'react-alert';

const Sellerboard = () => {
  
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error:productError, products, loading:productLoading } = useSelector((state) => state.products);
  const { error:shopError, shops, loading:shopLoading } = useSelector((state) => state.shops);

  useEffect(() => {
    if(productError) {
      return alert.error(productError);
    }

    if(shopError) {
      return alert.error(shopError);
    }
  
    dispatch(getSellerShops());
    dispatch(getSellerProducts());
  }, [dispatch, alert, productError, shopError])
  return (
    <MainContainer innerspace='0'>
    <Metadata title='localMart - Dashboard(Seller)' />
      <TopContainer equally='center'>
          <h2>Seller Dashboard</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <AdminInnerContainer>
          <AmountContainer>
            <p>Total Amount: 2000</p>
          </AmountContainer>

          <CircleContainer>
            <CircleLinked to='/seller/shops'>
              <h6>Shops</h6>
              <p>{shops.length}</p>
            </CircleLinked>

            <CircleLinked to='/seller/products'>
              <h6>Products</h6>
              <p>{products.length}</p>
            </CircleLinked>

            <CircleLinked to='/seller/orders'>
              <h6>Orders</h6>
              <p>34</p>
            </CircleLinked>

            <CircleLinked to='/seller/users'>
              <h6>Users</h6>
              <p>34</p>
            </CircleLinked>
          </CircleContainer>
        </AdminInnerContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default Sellerboard