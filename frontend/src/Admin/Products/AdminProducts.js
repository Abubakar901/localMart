import React from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
  AdminMainContainer,
} from "../AdminStyle";
import Sidebar from "../Components/Sidebar/Sidebar";
import Metadata from "../../Layout/Metadata";
import DataListProduct from "../Components/DataListProduct/DataListProduct";

const AdminProducts = () => {
  return (
    <MainContainer>
      <Metadata title="localMart - Products(Admin)" />
      <Sidebar />
      <AdminMainContainer>
        <TopContainer>
          <h2>All Products</h2>
        </TopContainer>
        <BottomContainer>
          <DataListProduct />
        </BottomContainer>
      </AdminMainContainer>
    </MainContainer>
  );
};

export default AdminProducts;
