import React, { useState } from 'react';
import { MainContainer, TopContainer, BottomContainer,AdminMainContainer } from '../AdminStyle';
import Sidebar from '../components/Sidebar/Sidebar';
import DataListProduct from '../components/DataListProduct/DataListProduct';
import Metadata from '../../Layout/Metadata';
import { ResponsiveSide } from '../Dashboard/AdminboardStyle';

const AdminProduct = () => {
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
    <Metadata title='localMart - Products(Admin)' />
      <TopContainer equally='center'>-
          <h2>All Products</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar responsive={responsive} />
        <ResponsiveSide onClick={handleResponsive}/>
        <AdminMainContainer>
            <DataListProduct />
        </AdminMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default AdminProduct