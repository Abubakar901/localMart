import React, { useState, useEffect } from 'react'
import { MainContainer, TopContainer, BottomContainer } from '../../../GlobalStyle';
import { SellerMainContainer } from '../../SellerStyle';
import { SellerShopForm , FormTopContainer, FirstContainer, SecondContainer,EachContainer, ShopLabels, ShopInputs, ImageInputContainer, ImageOneContainer, ImageTwoContainer, CreateShopBtn } from './ShopNewStyle';
import Sidebar from '../../components/Sidebar/Siderbar';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, createShop } from '../../../actions/shopActions';
import { CREATE_SHOP_RESET } from '../../../constant/keys';
import { useNavigate } from 'react-router-dom';
import Metadata from '../../../Layout/Metadata';

const ShopNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [shopName, setShopName] = useState();
    const [shopContact, setShopContact] = useState();
    const [shopAddress, setShopAddress] = useState();
    const [shopCity, setShopCity] = useState();
    const [shopState, setShopState] = useState();
    const [shopCountry, setShopCountry] = useState();
    const [shopCategory, setShopCategory] = useState();
    const [shopPinCode, setShopPinCode] = useState();
    const [shopImage, setShopImage] = useState([]);
    const [shopAvatarPreview, setShopAvatarPreview] = useState(["/assests/Shop.png"]);

    const { loading, success} = useSelector((state) => state.newShop)

    const createShopImageChange = (e) => {
      const files = Array.from(e.target.files);

      setShopImage([]);
      setShopAvatarPreview([]);
  
      files.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setShopAvatarPreview((old) => [...old, reader.result]);
            setShopImage((old) => [...old, reader.result]);
          }
        };
  
        reader.readAsDataURL(file);
      });
    }

      const shopFormSubmit = (e) => {
        e.preventDefault();
          
          const shopData = new FormData();
    
          shopData.set("name", shopName);
          shopData.set("contact", shopContact);  
          shopData.set("address", shopAddress);
          shopData.set("city", shopCity);
          shopData.set("state", shopState);
          shopData.set("country", shopCountry);
          shopData.set("category", shopCategory);
          shopData.set("pinCode", shopPinCode);

          shopImage.forEach((image) => {
            shopData.append("images", image)
          })
          dispatch(createShop(shopData));
        }
        
        useEffect(() => {
          if(success) {
            navigate('/seller/shops');
            alert.success("Shop Created Successfully");
          dispatch({ type: CREATE_SHOP_RESET });
        }
      }, [success, dispatch, navigate])
      
  return (
    <MainContainer innerspace='0'>
    <Metadata title='localMart - Add Shop' />
      <TopContainer equally='center'>-
          <h2>Add New Shop</h2>
      </TopContainer>
      <BottomContainer outerspace='0'>
        <Sidebar />
        <SellerMainContainer>
            <SellerShopForm encType="multipart/form-data" onSubmit={shopFormSubmit}>
                <FormTopContainer>
                <FirstContainer>
                    <EachContainer>
                        <ShopLabels>Name : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Name' name='shopName' value={shopName} onChange={(e) => setShopName(e.target.value)} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>Contact : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Contact Number' name='shopContact' value={shopContact} onChange={(e) => setShopContact(e.target.value)} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>City : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop City' name='shopCity' value={shopCity} onChange={(e) => setShopCity(e.target.value)} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>Country : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Country' name='shopCountry' value={shopCountry} onChange={(e) => setShopCountry(e.target.value)} required />
                    </EachContainer>
                    

                </FirstContainer>
                
                <SecondContainer>

                
                    <EachContainer>
                        <ShopLabels>Category : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Category' name='shopCategory' value={shopCategory} onChange={(e) => setShopCategory(e.target.value)} required />
                    </EachContainer>
                    
                    <EachContainer>
                        <ShopLabels>Address : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Address'  name='shopAddress' value={shopAddress} onChange={(e) => setShopAddress(e.target.value)} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>State : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop State' name='shopState' value={shopState} onChange={(e) => setShopState(e.target.value)} required />
                    </EachContainer>

                    
                    <EachContainer>
                        <ShopLabels>PinCode : </ShopLabels>
                        <ShopInputs placeholder='Please Enter Shop Area Pincode' name='shopPincode' value={shopPinCode} onChange={(e) => setShopPinCode(e.target.value)} required />
                    </EachContainer>



                </SecondContainer>
                </FormTopContainer>

                <ImageInputContainer>
                  <ImageOneContainer>
                    <ShopLabels>Upload Image : </ShopLabels>
                    <input type='file' name='avatar' accept="image/*" multiple onChange={createShopImageChange} />
                  </ImageOneContainer>
                  <ImageTwoContainer>
                    {
                      shopAvatarPreview.map((preview, index) => (
                        <img src={preview} key={index} alt='No-Preview' />
                      ))
                    }
                  </ImageTwoContainer>
                </ImageInputContainer>

                <CreateShopBtn  value='submit' type='submit'>Create Shop</CreateShopBtn>
            </SellerShopForm>
        </SellerMainContainer>
      </BottomContainer>
    </MainContainer>
  )
}

export default ShopNew