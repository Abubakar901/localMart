import React, { useState, useEffect } from "react";
import {
  EditFrom,
  MainContainer,
  TopContainer,
  UploadImageInput,
  ImagePreview,
  UpdateBtn,
  EachContainer,
  Labels,
} from "../../EditStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  getShopDetails,
  updateShop,
  clearErrors,
} from "../../../Actions/ShopAction";
import Loader from "../../../Layout/Loader/Loader";
import { useNavigate } from "react-router-dom";
import Metadata from "../../../Layout/Metadata";
import { UPDATE_SHOP_RESET } from "../../../Constants/ShopConstants";

const EditShop = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const {
    shop,
    loading: shopLoading,
    error,
  } = useSelector((state) => state.shopDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.deleteShop);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [delivery, setDelivery] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  // upload image
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

  // shop submittion form
  const updateShopSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("contact", contact);
    myForm.set("category", category);
    myForm.set("delivery", delivery);
    myForm.set("address", address);
    myForm.set("city", city);
    myForm.set("state", state);
    myForm.set("country", country);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateShop(id, myForm));
  };

  useEffect(() => {
    if (shop && shop._id !== id) {
      dispatch(getShopDetails(id));
    } else {
      setName(shop.name);
      setAddress(shop.address);
      setContact(shop.contact);
      setCategory(shop.category);
      setDelivery(shop.delivery);
      setCity(shop.city);
      setState(shop.state);
      setCountry(shop.country);
      setOldImages(shop.images);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
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
  }, [dispatch, id, error, alert, isUpdated, updateError, navigate, shop]);

  return (
    <>
      {shopLoading ? (
        <Loader />
      ) : (
        <MainContainer>
          <Metadata title={`localMart - ${shop?.name} Edit(Seller)`} />
          <TopContainer>
            <h2>Edit ({shop?.name})</h2>
          </TopContainer>
          <EditFrom
            encType="multipart/form-data"
            onSubmit={updateShopSubmitHandler}
          >
            <EachContainer>
              <Labels>Shop Name</Labels>
              <input
                type="text"
                placeholder="Shop Name"
                name="name"
                required
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Shop Contact</Labels>
              <input
                type="text"
                placeholder="Shop Contact"
                required
                autoComplete="off"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Shop Category</Labels>
              <input
                type="text"
                placeholder="Shop Category"
                required
                name="category"
                autoComplete="off"
                value={category}
                onChange={(e) => setCategory(e.target.value.toLowerCase())}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Shop Delivery</Labels>
              <input
                type="text"
                placeholder="Shop Delivery"
                required
                autoComplete="off"
                name="delivery"
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Shop Address</Labels>
              <input
                type="text"
                placeholder="Shop Address"
                required
                autoComplete="off"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Shop City</Labels>
              <input
                type="text"
                placeholder="Shop City"
                required
                autoComplete="off"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value.toLowerCase())}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Shop State</Labels>
              <input
                type="text"
                placeholder="Shop State"
                required
                name="state"
                autoComplete="off"
                value={state}
                onChange={(e) => setState(e.target.value.toLowerCase())}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Shop Country</Labels>
              <input
                type="text"
                placeholder="Shop Country"
                required
                autoComplete="off"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value.toLowerCase())}
              />
            </EachContainer>

            <UploadImageInput
              type="file"
              name="avatar"
              accept="image/*"
              onChange={updateShopImagesChange}
              multiple
            />

            <ImagePreview>
              {oldImages &&
                oldImages?.map((image, index) => (
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
              Update Shop
            </UpdateBtn>
          </EditFrom>
        </MainContainer>
      )}
    </>
  );
};

export default EditShop;
