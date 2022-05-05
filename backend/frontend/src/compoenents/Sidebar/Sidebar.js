import React from 'react';
import { InnerContainer } from './SidebarStyle';

const Sidebar = ({ productCategory }) => {

  const checkCategory = (category) => {
    console.log(category);
  }
  
  return (
      <InnerContainer>
        <p onClick={() => checkCategory(productCategory)} >{productCategory}</p>
      </InnerContainer>
  )
}

export default Sidebar