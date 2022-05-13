import React, { useState } from 'react';
import { ShippingMidContainer, ShippingForm, InputContainer, ShippingSubmitBtn } from './ShippingSyle';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { saveShippingInfo } from '../../actions/cartAction';
import Metadata from '../../Layout/Metadata';
import { Country, State } from 'country-state-city';
import { MainContainer } from '../../GlobalStyle';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault(); e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    navigate('/order/confirm');
  }
  return (
    <MainContainer>
      <Metadata title='localMart - Shipping' />
      <ShippingMidContainer>
        <h3>Shipping Info</h3>
        <ShippingForm encType="multipart/form-data" onSubmit={shippingSubmit}>

          <InputContainer>
            <label>Address:</label>
            <input placeholder='Please Enter Address' type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} required/>
          </InputContainer>

          <InputContainer>
            <label>City:</label>
            <input placeholder='Please Enter City' type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)} required/>
          </InputContainer>

          <InputContainer> 
            <label>PinCode:</label>
            <input placeholder='Please Enter Pin Code' type='text' name='pinCode' value={pinCode} onChange={(e) => setPinCode(e.target.value)} required/>  
          </InputContainer>
          
          <InputContainer>
            <label>Phone Number:</label>
            <input placeholder='Please Enter Phone Number' type='number' name='phoneNo' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} size='10' required/>  
          </InputContainer>
          
          <InputContainer>
            <label>Country:</label>
            <select value={country} onChange={(e) => setCountry(e.target.value)} required >

            <option value="">Country</option>
            {
              Country && Country.getAllCountries().map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))
            }
            </select>
          </InputContainer>
          
          {
            country && (
              <InputContainer>
                <label>State:</label>
                <select value={state} onChange={(e) => setState(e.target.value) }>
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </InputContainer>
            )
          }


          <ShippingSubmitBtn  value='submit' type='submit' disabled={state ? false : true}>Continue</ShippingSubmitBtn>
        </ShippingForm>
      </ShippingMidContainer>
    </MainContainer>
  )
}

export default Shipping