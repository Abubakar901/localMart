import React from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
  SellerMainContainer,
} from "../../SellerStyle";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Metadata from "../../../Layout/Metadata";
import DataListProduct from "../../Components/DataListProduct/DataListProduct";

const AllProducts = () => {
  return (
    <MainContainer>
      <Metadata title="localMart - All Products(Seller)" />
      <Sidebar />
      <SellerMainContainer>
        <TopContainer>
          <h2>All Products</h2>
        </TopContainer>
        <BottomContainer>
          <DataListProduct />
        </BottomContainer>
      </SellerMainContainer>
    </MainContainer>
  );
};

export default AllProducts;
