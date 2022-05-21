import React from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import { AdminMainContainer } from '../AdminStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import DataListOrder from '../components/DataListOrder/DataListOrder';
import Metadata from '../../Layout/Metadata';

const AdminOrder = () => {
  return (
    <MainContainer innerspace='0'>
    <Metadata title='localMart - Orders(Admin)' />
      <TopContainer equally='center'>-
          <h2>All Orders</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <AdminMainContainer>
            <DataListOrder />
        </AdminMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default AdminOrder