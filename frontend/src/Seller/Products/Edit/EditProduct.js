import React, { useEffect, useState } from "react";
import {
  EditFrom,
  MainContainer,
  TopContainer,
  EachContainer,
  Labels,
  UploadImageInput,
  ImagePreview,
  UpdateBtn,
} from "../../EditStyle";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../../../Layout/Loader/Loader";
import {
  getProductDetails,
  updateProduct,
  clearErrors,
} from "../../../Actions/ProductAction";
import Metadata from "../../../Layout/Metadata";
import { UPDATE_PRODUCT_RESET } from "../../../Constants/ProductsConstants";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const {
    product,
    error,
    loading: productLoading,
  } = useSelector((state) => state.productDetails);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.deleteProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  // update image
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

  // update product form
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

  useEffect(() => {
    if (product && product?._id !== id) {
      dispatch(getProductDetails(id));
    } else {
      setName(product?.name);
      setPrice(product?.price);
      setDescription(product?.description);
      setStock(product?.Stock);
      setCategory(product?.category);
      setOldImages(product?.images);
    }

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
  }, [dispatch, id, error, alert, isUpdated, updateError, navigate, product]);

  return (
    <>
      {productLoading ? (
        <Loader />
      ) : (
        <MainContainer>
          <Metadata title={`localMart - ${product?.name} Edit(Seller)`} />
          <TopContainer>
            <h2>Product Edit ({product?.name})</h2>
          </TopContainer>
          <EditFrom
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <EachContainer>
              <Labels>Product Name</Labels>
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Product Descrition</Labels>
              <input
                type="text"
                placeholder="Product Descrition"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Product Category</Labels>
              <input
                type="text"
                placeholder="Product Category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value.toLowerCase())}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Product Price</Labels>
              <input
                type="number"
                placeholder="Product Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </EachContainer>

            <EachContainer>
              <Labels>Product Stock</Labels>
              <input
                type="number"
                placeholder="Enter Product Stock"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </EachContainer>

            <UploadImageInput
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
              Update Product
            </UpdateBtn>
          </EditFrom>
        </MainContainer>
      )}
    </>
  );
};

export default EditProduct;
