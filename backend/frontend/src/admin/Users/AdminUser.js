import React, { useState } from 'react';
import { MainContainer, TopContainer, BottomContainer, AdminMainContainer } from '../AdminStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import DataListUser from '../components/DataListUser/DataListUser';
import Metadata from '../../Layout/Metadata';
import { ResponsiveSide } from '../Dashboard/AdminboardStyle';

const AdminUser = () => {
  const [responsive, setResponsive] = useState('none');
  let openPanel = false;

  const handleResponsive = () => {
    openPanel = !openPanel;
    if(openPanel) {
      setResponsive('flex')
    } else {
      setResponsive('none')
    }
  }
  return (
    <MainContainer innerspace='0'>
    <Metadata title='localMart - Users(Admin)' />
      <TopContainer equally='center'>-
          <h2>Admin All Shops</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar responsive={responsive} />
        <ResponsiveSide onClick={handleResponsive}/>
        <AdminMainContainer>
            <DataListUser />
        </AdminMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default AdminUser



  
