import React, { useState, useEffect } from 'react'
import { MainContainer, TopContainer, BottomContainer } from '../../../GlobalStyle';
import { SellerMainContainer } from '../../SellerStyle';
import { SellerShopForm , FormTopContainer, EachContainer, ShopLabels, ShopInputs, ImageInputContainer, ImageOneContainer, ImageTwoContainer, CreateShopBtn } from './ProductNewStyle';
import Sidebar from '../../components/Sidebar/Siderbar';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerShops } from '../../../actions/shopActions';
import { createProduct } from '../../../actions/productAction';
import { CREATE_PRODUCT_RESET } from '../../../constant/keys';
import { useNavigate } from 'react-router-dom';
import Metadata from '../../../Layout/Metadata';


const ProductNew = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productDescription, setProductDescription] = useState();
    const [productCategory, setProductCategory] = useState();
    const [productStock, setProductStock] = useState(1);
    const [productShopName, setProductShopName] = useState();;
    const [productImage, setProductImage] = useState([]);
    const [productAvatarPreview, setProductAvatarPreview] = useState(["/assests/Shop.png"]);

    const { shops } = useSelector((state) => state.shops) 

    const { success } = useSelector((state) => state.newProduct)


    const createProductImageChange = (e) => {
      const files = Array.from(e.target.files);

      setProductImage([]);
      setProductAvatarPreview([]);
  
      files.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setProductAvatarPreview((old) => [...old, reader.result]);
            setProductImage((old) => [...old, reader.result]);
          }
        };
  
        reader.readAsDataURL(file);
      });
    }

      const productFormSubmit = (e) => {
        e.preventDefault();
          
          const productData = new FormData();

    
          productData.set("name", productName);
          productData.set("price", productPrice);  
          productData.set("description", productDescription);
          productData.set("category", productCategory);
          productData.set("Stock", productStock);
          productData.set("shopName", productShopName);

          productImage.forEach((image) => {
            productData.append("images", image)
          })
          dispatch(createProduct(productData));
        }
        
        useEffect(() => {
          dispatch(getSellerShops());
          if(success) {
            alert.success("Product Created Successfully");
          dispatch({ type: CREATE_PRODUCT_RESET });
        }
      }, [success, dispatch])
    
  return (
    <MainContainer innerspace='0'>
    <Metadata title='localMart - Add Product' />
      <TopContainer equally='center'>-
          <h2>Add New Product</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <SellerMainContainer>
            <SellerShopForm encType="multipart/form-data" onSubmit={productFormSubmit}>
                <FormTopContainer>
                    <EachContainer>
                        <ShopLabels>Name : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Product Name' name='productName' type='text' value={productName} onChange={(e) => setProductName(e.target.value)} required />
                    </EachContainer>
             
                    <EachContainer>
                        <ShopLabels>Price : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Product Price' name='productPrice' type='text' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
                    </EachContainer>
                   
                    <EachContainer>
                        <ShopLabels>Description : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Product Description' name='productDescription' type='text' value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
                    </EachContainer>
                    
                    <EachContainer>
                        <ShopLabels>Category : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Country' name='productCategory' type='text' value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required />
                    </EachContainer>
                    
                
                    <EachContainer>
                        <ShopLabels>Stock : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Category' name='productStock' type='number' value={productStock} onChange={(e) => setProductStock(e.target.value)} required />
                    </EachContainer>
                    
                    <EachContainer>
                        <ShopLabels>Select Shop : </ShopLabels>
                        <select onChange={(e) => setProductShopName(e.target.value)}>
                           {
                               shops && shops.map((shop) => ( 
                                  <option key={shop?._id} value={shop?._id}>
                                       {shop?.name}
                                   </option>
                               ))
                           } 
                        </select>
                    </EachContainer>


                </FormTopContainer>

                <ImageInputContainer>
                  <ImageOneContainer>
                    <ShopLabels>Upload Image : </ShopLabels>
                    <input type='file' name='avatar' accept="image/*" multiple onChange={createProductImageChange} />
                  </ImageOneContainer>
                  <ImageTwoContainer>
                    {
                      productAvatarPreview.map((preview, index) => (
                        <img src={preview} key={index} alt='No-Preview' />
                      ))
                    }
                  </ImageTwoContainer>
                </ImageInputContainer>

                <CreateShopBtn  value='submit' type='submit'>Create Product</CreateShopBtn>
            </SellerShopForm>
        </SellerMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default ProductNew