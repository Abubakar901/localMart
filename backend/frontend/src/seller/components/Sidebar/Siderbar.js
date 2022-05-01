import React from 'react';
import { SidebarContainer, Heading, TwiceContainer,  SideLink } from './SidebarStyle';

const Sidebar = () => {
  return (
    <SidebarContainer>  
        <Heading>LocalMart</Heading>
        
        <SideLink to='/seller/dashboard'>
            Dashboard
        </SideLink>

       <TwiceContainer>
            <h5>Shops</h5>

            <SideLink to='/seller/shop/new'>
                <h6>Add Shop</h6>
            </SideLink>

            <SideLink to='seller/shops'>
                <h6>All Shops</h6>
            </SideLink>
            
       </TwiceContainer>

       <TwiceContainer>
            <h5>Products</h5>
            <SideLink to='/seller/product/new'>
                <h6>Add Product</h6>
            </SideLink>
            <SideLink to='seller/products'>
                <h6>All Products</h6>
            </SideLink>
       </TwiceContainer>
        
        <SideLink to='/seller/orders'>
            Orders
        </SideLink>

        <SideLink to='/seller/users'>
            Users
        </SideLink>

        <SideLink to='/seller/product/reviews'>
            Reviews
        </SideLink>

    </SidebarContainer>
  )
}

export default Sidebar