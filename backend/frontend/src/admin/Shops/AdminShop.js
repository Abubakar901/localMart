import React, { useState } from 'react';
import { MainContainer, TopContainer, BottomContainer, AdminMainContainer } from '../AdminStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import DataListShop from '../components/DataListShop/DataListShop';
import Metadata from '../../Layout/Metadata';
import { ResponsiveSide } from '../Dashboard/AdminboardStyle';

const AdminShops = () => {
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
      <Metadata title='localMart - Shops(Admin)' />
      <TopContainer equally='center'>-
          <h2>All Shops</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar responsive={responsive} />
        <ResponsiveSide onClick={handleResponsive}/>
        <AdminMainContainer>
            <DataListShop />
        </AdminMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default AdminShops