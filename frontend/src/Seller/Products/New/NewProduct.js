import React, { useState, useEffect } from "react";
import {
  NewProductMainContainer,
  NewProductRightContainer,
  NewProductTopContainer,
  NewProductFrom,
  EachContainer,
  ProductInputs,
  ProductLabels,
  ImageInputContainer,
  ImageOneContainer,
  ImageTwoContainer,
  CreateProductBtn,
} from "./NewProductStyle";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getSellerShops } from "../../../Actions/ShopAction";
import { createProduct, clearErrors } from "../../../Actions/ProductAction";
import { CREATE_PRODUCT_RESET } from "../../../Constants/ProductsConstants";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import Metadata from "../../../Layout/Metadata";
import Loader from "../../../Layout/Loader/Loader";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { shops, error, loading } = useSelector((state) => state.shops);

  const {
    success,
    error: ProductError,
    loading: ProductLoading,
  } = useSelector((state) => state.newProduct);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productStock, setProductStock] = useState(1);
  const [productShopName, setProductShopName] = useState("");
  const [productImage, setProductImage] = useState([]);
  const [productAvatarPreview, setProductAvatarPreview] = useState([
    "/assests/Shop.png",
  ]);

  // upload product image
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
  };

  // submit product form
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
      productData.append("images", image);
    });

    dispatch(createProduct(productData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }

    if (ProductError) {
      alert.error(ProductError);
      dispatch(clearErrors);
    }

    if (success) {
      alert.success("Product Created Successfully");
      dispatch({ type: CREATE_PRODUCT_RESET });
      navigate("/seller/dashboard");
    }
    dispatch(getSellerShops());
  }, [dispatch, alert, error, ProductError, success, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <NewProductMainContainer>
          <Metadata title="localMart - Add Product(Seller)" />
          <Sidebar />
          <NewProductRightContainer>
            <NewProductTopContainer>
              <h4>Add New Product</h4>
            </NewProductTopContainer>
            <NewProductFrom
              encType="multipart/form-data"
              onSubmit={productFormSubmit}
            >
              <EachContainer>
                <ProductLabels>Product Name</ProductLabels>
                <ProductInputs
                  placeholder="Please Enter Name"
                  name="productName"
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value.toLowerCase())}
                  required
                />
              </EachContainer>

              <EachContainer>
                <ProductLabels>Product Price</ProductLabels>
                <ProductInputs
                  placeholder="Please Enter Price"
                  name="productPrice"
                  type="number"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  required
                />
              </EachContainer>

              <EachContainer>
                <ProductLabels>Product Description</ProductLabels>
                <ProductInputs
                  placeholder="Please Enter Description"
                  name="productDescription"
                  type="text"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  required
                />
              </EachContainer>

              <EachContainer>
                <ProductLabels>Product Category</ProductLabels>
                <ProductInputs
                  placeholder="Please Enter Category"
                  name="productCategory"
                  type="text"
                  value={productCategory}
                  onChange={(e) =>
                    setProductCategory(e.target.value.toLowerCase())
                  }
                  required
                />
              </EachContainer>

              <EachContainer>
                <ProductLabels>Total Stock</ProductLabels>
                <ProductInputs
                  placeholder="Please Enter Product Stock"
                  name="productStock"
                  type="number"
                  value={productStock}
                  onChange={(e) => setProductStock(e.target.value)}
                  required
                />
              </EachContainer>

              <ProductLabels>Select Shop : </ProductLabels>
              <select onChange={(e) => setProductShopName(e.target.value)}>
                <option value="">Shops</option>
                {shops &&
                  shops.map((shop) => (
                    <option key={shop?._id} value={shop?._id}>
                      {shop?.name}
                    </option>
                  ))}
              </select>

              <ImageInputContainer>
                <ImageOneContainer>
                  <ProductLabels>Upload Image : </ProductLabels>
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    multiple
                    onChange={createProductImageChange}
                  />
                </ImageOneContainer>
                <ImageTwoContainer>
                  {productAvatarPreview.map((preview, index) => (
                    <img src={preview} key={index} alt="No-Preview" />
                  ))}
                </ImageTwoContainer>
              </ImageInputContainer>

              <CreateProductBtn
                value="submit"
                type="submit"
                disabled={ProductLoading ? true : false}
              >
                Create Product
              </CreateProductBtn>
            </NewProductFrom>
          </NewProductRightContainer>
        </NewProductMainContainer>
      )}
    </>
  );
};

export default NewProduct;
