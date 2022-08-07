import React, { useEffect, useState } from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
  SellerMainContainer,
  ShopLabels,
} from "../SellerStyle";
import Sidebar from "../Components/Sidebar/Sidebar";
import Metadata from "../../Layout/Metadata";
import { useSelector, useDispatch } from "react-redux";
import { getSellerShops } from "../../Actions/ShopAction";
import { useAlert } from "react-alert";
import Loader from "../../Layout/Loader/Loader";
import DataListOrder from "../Components/DataListOrder/DataListOrder";

const SellerOrders = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, shops, loading } = useSelector((state) => state.shops);

  const [shopId, setShopId] = useState("");
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getSellerShops());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MainContainer>
          <Metadata title="localMart - Orders(Seller)" />
          <Sidebar />
          <SellerMainContainer>
            <TopContainer>
              <ShopLabels>Select Shop to see Orders of: </ShopLabels>
              <select onChange={(e) => setShopId(e.target.value)}>
                <option value="">Select Shops</option>
                {shops &&
                  shops.map((shop) => (
                    <option key={shop?._id} value={shop?._id}>
                      {shop?.name}
                    </option>
                  ))}
              </select>
            </TopContainer>
            <BottomContainer>
                <DataListOrder shopId={shopId} />
            </BottomContainer>
          </SellerMainContainer>
        </MainContainer>
      )}
    </>
  );
};

export default SellerOrders;
