import React from 'react';
import { SidebarContainer, Heading, SideLink } from './SidebarStyle';

const Sidebar = () => {
  return (
    <SidebarContainer>  
        <Heading>LocalMart</Heading>
        
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

        <SideLink to='/admin/reviews'>
            Reviews
        </SideLink>

    </SidebarContainer>
  )
}

export default Sidebar