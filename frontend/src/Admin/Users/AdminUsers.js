import React from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
  AdminMainContainer,
} from "../AdminStyle";
import Sidebar from "../Components/Sidebar/Sidebar";
import Metadata from "../../Layout/Metadata";
import DataListUser from "../Components/DataListUser/DataListUser";

const AdminUsers = () => {
  return (
    <MainContainer>
      <Metadata title="localMart - Users(Admin)" />
      <Sidebar />
      <AdminMainContainer>
        <TopContainer>
          <h2>All Users</h2>
        </TopContainer>
        <BottomContainer>
          <DataListUser />
        </BottomContainer>
      </AdminMainContainer>
    </MainContainer>
  );
};

export default AdminUsers;
