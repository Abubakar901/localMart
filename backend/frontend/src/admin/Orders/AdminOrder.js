import React, { useState } from 'react';
import { MainContainer, TopContainer, BottomContainer } from '../../GlobalStyle';
import { AdminMainContainer } from '../AdminStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import DataListOrder from '../components/DataListOrder/DataListOrder';
import Metadata from '../../Layout/Metadata';
import { ResponsiveSide } from '../Dashboard/AdminboardStyle';

const AdminOrder = () => {
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
    <Metadata title='localMart - Orders(Admin)' />
      <TopContainer equally='center'>-
          <h2>All Orders</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar responsive={responsive} />
        <ResponsiveSide onClick={handleResponsive}/>
        <AdminMainContainer>
            <DataListOrder />
        </AdminMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default AdminOrder