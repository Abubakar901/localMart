import React from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
  AdminMainContainer,
} from "../AdminStyle";
import Sidebar from "../Components/Sidebar/Sidebar";
import Metadata from "../../Layout/Metadata";
import DataListShop from "../Components/DataListShop/DataListShop";

const AdminShops = () => {
  return (
    <MainContainer>
      <Metadata title="localMart - Shops(Admin)" />
      <Sidebar />
      <AdminMainContainer>
        <TopContainer>
          <h2>All Shops</h2>
        </TopContainer>
        <BottomContainer>
          <DataListShop />
        </BottomContainer>
      </AdminMainContainer>
    </MainContainer>
  );
};

export default AdminShops;
