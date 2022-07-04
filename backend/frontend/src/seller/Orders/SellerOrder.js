import React, { useState, useEffect } from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
  SellerMainContainer,
  ShopLabels
} from "../SellerStyle";
import Metadata from "../../Layout/Metadata";
import { useSelector, useDispatch } from "react-redux";
import { getSellerShops } from "../../actions/shopActions";
import { getSellerOrders } from "../../actions/orderAction";
import { useAlert } from "react-alert";
import Sidebar from "../components/Sidebar/Sidebar";
import Loader from "../../Layout/Loader/Loader";

const SellerOrder = () => {
  const dispatch = useDispatch();
  const [shop, setShop ] = useState();
  const alert = useAlert();

  const { error, shops, loading } = useSelector((state) => state.shops);

  const { error: orderError, orders, loading :orderLoading } = useSelector((state) => state.orders);


  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    if(orderError) {
      return alert.error(orderError)
    }
    
    if(shop){
      dispatch(getSellerOrders(shop))
    }
    dispatch(getSellerShops());
  }, [dispatch, error, alert, orderError, shop]);
  

  console.log(orders)

  return (
    <>
      {
        loading ? (
        <Loader />
      ) : (
        <MainContainer innerspace="0">
          <Metadata title="All Products(Seller)" />
          <TopContainer>
            <h2>All Products</h2>
          </TopContainer>
          <BottomContainer outerspace="0">
            <Sidebar />
            <SellerMainContainer>
              <TopContainer updown="column">
                <ShopLabels>Select Shop to see Orders of: </ShopLabels>
                <select onChange={(e) => setShop(e.target.value)}>
                  {shops &&
                    shops.map((shop) => (
                      <option key={shop?._id} value={shop?._id}>  
                        {shop?.name}
                      </option>
                    ))}
                </select>
              </TopContainer>
            </SellerMainContainer>
          </BottomContainer>
        </MainContainer>
      )}
    </>
  );
};

export default SellerOrder;
