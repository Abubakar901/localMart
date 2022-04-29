import React from 'react'
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import { AdminMainContainer } from '../AdminStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import DataListUser from '../components/DataListUser/DataListUser';

const AdminUser = () => {
  return (
    <MainContainer innerspace='0'>
      <TopContainer equally='center'>-
          <h2>Admin All Shops</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <AdminMainContainer>
            <DataListUser />
        </AdminMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default AdminUser



  
