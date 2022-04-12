import React from 'react'
import { ShopContainer } from './ShopStyle';
import ShopCard from '../../compoenents/ShopCard/ShopCard';
import { shops } from '../../constant/data';

const Shop = () => {
  return (
    <ShopContainer>
        {
            shops.map(shop => (
                <ShopCard
                key={shop.id}
                id={shop.id}
                url={shop.url}
                category={shop.category}
                shopName={shop.shopName}
                shopAddress={shop.shopAddress}
                rating={shop.rating}
              />
          ))
        }
    </ShopContainer>

    
  )
}

export default Shop