import React, { useEffect } from 'react';
import { MainContainer } from './OrderDetailStyle';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../Layout/Loader/Loader';
import { useAlert } from "react-alert";
import Metadata from '../../Layout/Metadata';
import { getOrderDetails, clearErrors } from '../../actions/orderAction';

const OrderDetail = () => {
  const {id} =useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
      dispatch(getOrderDetails(id));
  }, [ dispatch, id, error, alert ])


  console.log(order)
  return (
    <MainContainer>
      <Metadata title='localMart - Order Details()' />
      {
        loading ? <Loader /> : (
          <></>
        )
      }
      
    </MainContainer>
  )
}

export default OrderDetail