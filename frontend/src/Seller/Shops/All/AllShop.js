import React from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
  SellerMainContainer,
} from "../../SellerStyle";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Metadata from "../../../Layout/Metadata";
import DataListShop from "../../Components/DataListShop/DataListShop";

const AllShop = () => {
  return (
    <MainContainer>
      <Metadata title="localMart - All Shops(Seller)" />
      <Sidebar />
      <SellerMainContainer>
        <TopContainer>
          <h2>All Shops</h2>
        </TopContainer>
        <BottomContainer>
            <DataListShop />
        </BottomContainer>
      </SellerMainContainer>
    </MainContainer>
  );
};

export default AllShop;
