import React, { useEffect } from 'react';
import  { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductMainContainer, ProductTopContainer } from '../Product/ProductStyle';
import Loader from '../../Layout/Loader/Loader';
import  { getProductByShop } from '../../actions/productAction';
import Metadata from '../../Layout/Metadata';
import {useAlert} from 'react-alert';
import { BottomContainer } from './ShopProductStyle';
import ProductCards from '../../compoenents/ProductCards/ProductCards';

const ShopProduct = () => {
    const alert = useAlert();
    const { id } = useParams();
    const dispatch = useDispatch();
    const {
        products,
        loading,
        error
    } = useSelector((state) => state.products);

    useEffect(() => {
        if(error) {
            alert.error(error)
        }

        dispatch(getProductByShop(id));
    }, [dispatch, error, alert, id]);

    console.log(products)
  return (
      <>
        {
            loading ? <Loader /> : 
            (
                <ProductMainContainer>
                    <Metadata title='localMart - Product of Shop' />
                    <ProductTopContainer>
                        <h4>Products of {products?.[0]?.shopName.name}</h4>
                    </ProductTopContainer>
                    <BottomContainer>
                    {
                        products && products.map((product) => (
                        <ProductCards product={product}
                                key={
                                    product?._id
                                }/>)) 
                    }
                    </BottomContainer>

                </ProductMainContainer>
            )
        }
      </>
  )
}

export default ShopProduct