
import React, { useEffect, useState } from 'react';
import { EditShopFrom, MainContainer, TopContainer, ImagePreview, UpdateBtn } from "../../Shops/Edit/ShopEditStyle";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useAlert } from "react-alert";
import Loader from "../../../Layout/Loader/Loader";
import {getProductDetails,updateProduct, clearErrors  } from '../../../actions/productAction';
import Metadata from "../../../Layout/Metadata";
import { UPDATE_PRODUCT_RESET } from "../../../constant/keys";

const ProductEdit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const {product, error, loading: productLoading} = useSelector((state) => state.productDetails);
    const {
        loading,
        error: updateError,
        isUpdated,
    } = useSelector((state)  => state.deleteProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
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
      alert.success("Product Updated Successfully");
      navigate("/seller/products");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, isUpdated, updateError, navigate]);

  useEffect(() => {
    if(product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setStock(product.Stock);
      setCategory(product.category);
      setOldImages(product.images);
    }
  }, [product])

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", stock);


    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProduct(id, myForm));
  };

  const updateProductImagesChange = (e) => {
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
    {productLoading ? (
      <Loader />
    ) : (
      <MainContainer>
        <Metadata title="localMart - shop edit" />
        <TopContainer>
          <h2>Product Edit ({product?.name})</h2>
        </TopContainer>
        <EditShopFrom
          encType="multipart/form-data"
          onSubmit={updateProductSubmitHandler}
        >
          <input
            type="text"
            placeholder="Product Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Product Descrition"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="text"
            placeholder="Product Category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Product Stock"
            required
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

            <input
              style={{marginLeft: 'auto', marginRight: 'auto', width: '200px'}}
              type="file"
              name="avatar"
              accept="image/*"
              onChange={updateProductImagesChange}
              multiple
            />

          <ImagePreview>
            {oldImages &&
              oldImages.map((image, index) => (
                <img key={index} src={image.url} alt="Old Product Preview" />
              ))}
          </ImagePreview>

          <ImagePreview>
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product Preview" />
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
  )
}

export default ProductEdit