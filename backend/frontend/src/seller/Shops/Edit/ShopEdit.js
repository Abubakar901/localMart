import React, { useState, useEffect } from "react";
import { EditShopFrom, MainContainer, TopContainer, ImagePreview, UpdateBtn } from "./ShopEditStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getShopDetails, updateShop, clearErrors } from "../../../actions/shopActions";
import Loader from "../../../Layout/Loader/Loader";
import { useNavigate } from "react-router-dom";
import Metadata from "../../../Layout/Metadata";
import { UPDATE_SHOP_RESET } from "../../../constant/keys";

const ShopEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { shop, loading:shopLoading, error } = useSelector((state) => state.shopDetails);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state)  => state.deleteShop)

  const [name, setName] = useState("");
  const [contact, setContact] = useState(0);
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState(0);
  const [state, setState] = useState(0);
  const [country, setCountry] = useState(0);
  const [pinCode, setPinCode] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {

    if (error) {
      return alert.error(error);
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Shop Updated Successfully");
      navigate("/seller/shops");
      dispatch({ type: UPDATE_SHOP_RESET });
    }

    dispatch(getShopDetails(id));
  }, [dispatch, id, error, alert, isUpdated, updateError, navigate]);

  useEffect(() => {
    if(shop) {
      setName(shop.name);
      setAddress(shop.address);
      setContact(shop.contact);
      setCity(shop.city);
      setState(shop.state);
      setCountry(shop.country);
      setPinCode(shop.pinCode);
      setCategory(shop.category);
      setOldImages(shop.images);
    }
  }, [shop])
  
  const updateShopSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("contact", contact);
    myForm.set("category", category);
    myForm.set("address", address);
    myForm.set("city", city);
    myForm.set("pinCode", pinCode);
    myForm.set("state", state);
    myForm.set("country", country);


    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateShop(id, myForm));
  };

  const updateShopImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      {shopLoading ? (
        <Loader />
      ) : (
        <MainContainer>
          <Metadata title="localMart - shop edit" />
          <TopContainer>
            <h2>Shop Edit ({shop?.name})</h2>
          </TopContainer>
          <EditShopFrom
            encType="multipart/form-data"
            onSubmit={updateShopSubmitHandler}
          >
            <input
              type="text"
              placeholder="Shop Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Shop Contact"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

            <input
              type="text"
              placeholder="Shop Category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              placeholder="Shop Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              type="text"
              placeholder="Shop City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              type="text"
              placeholder="Shop Pin Code"
              required
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />

            <input
              type="text"
              placeholder="Shop State"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Shop Country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

              <input
                style={{marginLeft: 'auto', marginRight: 'auto', width: '200px'}}
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateShopImagesChange}
                multiple
              />

            <ImagePreview>
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Shop Preview" />
                ))}
            </ImagePreview>

            <ImagePreview>
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Shop Preview" />
              ))}
            </ImagePreview>

            <UpdateBtn
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Update Data
            </UpdateBtn>
           
          </EditShopFrom>
        </MainContainer>
      )}
    </>
  );
};

export default ShopEdit;
