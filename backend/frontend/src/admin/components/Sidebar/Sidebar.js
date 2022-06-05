import React from 'react';
import { SidebarContainer, Heading, SideLink } from './SidebarStyle';

const Sidebar = ({ responsive }) => {
  return (
    <SidebarContainer responsive={responsive} >  
        <Heading>LocalMart</Heading>
        
        <SideLink to='/admin/dashboard'>
            Dashboard
        </SideLink>

        
        <SideLink to='/admin/shops'>
            Shops
        </SideLink>

        <SideLink to='/admin/products'>
            Products
        </SideLink>
        
        <SideLink to='/admin/orders'>
            Orders
        </SideLink>

        <SideLink to='/admin/users'>
            Users
        </SideLink>

    </SidebarContainer>
  )
}

export default Sidebar