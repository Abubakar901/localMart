import React from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
  AdminMainContainer,
} from "../AdminStyle";
import Sidebar from "../Components/Sidebar/Sidebar";
import Metadata from "../../Layout/Metadata";
import DataListOrder from "../Components/DataListOrder/DataListOrder";

const AdminOrders = () => {
  return (
    <MainContainer>
      <Metadata title="localMart - Orders(Admin)" />
      <Sidebar />
      <AdminMainContainer>
        <TopContainer>
          <h2>All Orders</h2>
        </TopContainer>
        <BottomContainer>
          <DataListOrder />
        </BottomContainer>
      </AdminMainContainer>
    </MainContainer>
  );
};

export default AdminOrders;
