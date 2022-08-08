import React, { useState, useEffect } from "react";
import {
  NewShopMainContainer,
  NewShopRightContainer,
  NewShopTopContainer,
  NewShopFrom,
  EachContainer,
  ShopLabels,
  ShopInputs,
  ImageInputContainer,
  ImageOneContainer,
  ImageTwoContainer,
  CreateShopBtn,
} from "./NewShopStyle";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { createShop, clearErrors } from "../../../Actions/ShopAction";
import { CREATE_SHOP_RESET } from "../../../Constants/ShopConstants";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import Metadata from "../../../Layout/Metadata";

const NewShop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const [shopName, setShopName] = useState("");
  const [shopContact, setShopContact] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [shopCity, setShopCity] = useState("");
  const [shopState, setShopState] = useState("");
  const [shopCountry, setShopCountry] = useState("");
  const [shopCategory, setShopCategory] = useState("");
  const [shopImage, setShopImage] = useState([]);
  const [shopAvatarPreview, setShopAvatarPreview] = useState([
    "/assests/Shop.png",
  ]);

  const { success, error, loading } = useSelector((state) => state.newShop);

  // upload image
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
  };

  // shop submit form
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

    shopImage.forEach((image) => {
      shopData.append("images", image);
    });
    dispatch(createShop(shopData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Shop Created Successfully");
      dispatch({ type: CREATE_SHOP_RESET });
      navigate("/seller/dashboard");
    }
  }, [dispatch, success, alert, error, navigate]);

  return (
    <NewShopMainContainer>
      <Metadata title="localMart - New Shop(Seller)" />
      <Sidebar />
      <NewShopRightContainer>
        <NewShopTopContainer>
          <h4>Create New Shop</h4>
        </NewShopTopContainer>
        <NewShopFrom encType="multipart/form-data" onSubmit={shopFormSubmit}>
          <EachContainer>
            <ShopLabels>Name : </ShopLabels>
            <ShopInputs
              placeholder="Please Enter Shop Name"
              name="shopName"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              required
            />
          </EachContainer>

          <EachContainer>
            <ShopLabels>Contact : </ShopLabels>
            <ShopInputs
              placeholder="Please Enter Shop Contact Number"
              type="number"
              name="shopContact"
              value={shopContact}
              onChange={(e) => setShopContact(e.target.value)}
              required
            />
          </EachContainer>

          <EachContainer>
            <ShopLabels>City : </ShopLabels>
            <ShopInputs
              placeholder="Please Enter Shop City"
              name="shopCity"
              value={shopCity}
              onChange={(e) => setShopCity(e.target.value.toLowerCase())}
              required
            />
          </EachContainer>

          <EachContainer>
            <ShopLabels>Country : </ShopLabels>
            <ShopInputs
              placeholder="Please Enter Shop Country"
              name="shopCountry"
              value={shopCountry}
              onChange={(e) => setShopCountry(e.target.value.toLowerCase())}
              required
            />
          </EachContainer>
          <EachContainer>
            <ShopLabels>Category : </ShopLabels>
            <ShopInputs
              placeholder="Please Enter Shop Category"
              name="shopCategory"
              value={shopCategory}
              onChange={(e) => setShopCategory(e.target.value.toLowerCase())}
              required
            />
          </EachContainer>

          <EachContainer>
            <ShopLabels>Address : </ShopLabels>
            <ShopInputs
              placeholder="Please Enter Shop Address"
              name="shopAddress"
              value={shopAddress}
              onChange={(e) => setShopAddress(e.target.value)}
              required
            />
          </EachContainer>

          <EachContainer>
            <ShopLabels>State : </ShopLabels>
            <ShopInputs
              placeholder="Please Enter Shop State"
              name="shopState"
              value={shopState}
              onChange={(e) => setShopState(e.target.value.toLowerCase())}
              required
            />
          </EachContainer>
          <ImageInputContainer>
            <ImageOneContainer>
              <ShopLabels>Upload Image : </ShopLabels>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                multiple
                onChange={createShopImageChange}
              />
            </ImageOneContainer>
            <ImageTwoContainer>
              {shopAvatarPreview.map((preview, index) => (
                <img src={preview} key={index} alt="No-Preview" />
              ))}
            </ImageTwoContainer>
          </ImageInputContainer>
          <CreateShopBtn
            value="submit"
            type="submit"
            disabled={loading ? true : false}
          >
            Create Shop
          </CreateShopBtn>
        </NewShopFrom>
      </NewShopRightContainer>
    </NewShopMainContainer>
  );
};

export default NewShop;
