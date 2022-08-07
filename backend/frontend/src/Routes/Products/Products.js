import React, { useState, useEffect } from "react";
import {
  ProductMainContainer,
  ProductLeftContainer,
  ResponsiveBtn,
  FilterBox,
  InnerBox,
  InnerContainer,
  FilterLink,
  ProductRightContainer,
  ProductTopContainer,
  SearchSideContainer,
  ProductCardsContainer,
  NoProductFoundContainer,
} from "./ProductsStyle";
import { getProducts, clearErrors } from "../../Actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../../Layout/Loader/Loader";
import Metadata from "../../Layout/Metadata";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [content, setContent] = useState(true);
  const [colorOne, setColorOne] = useState("red");
  const [colorTwo, setColorTwo] = useState("");

  const [display, setDisplay] = useState("none");
  const [responsiveBar, setResponsiveBar] = useState(true);
  const [SideBar, setSideBar] = useState("60px");
  const [animation, setAnimation] = useState("");
  const [textAnimation, setTextAnimation] = useState("");
  const [textOpacity, setTextOpacity] = useState("0");

  const [query, setQuery] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [typeCategory, setTypeCategory] = useState("");

  const { products, category, loading, city, error } = useSelector(
    (state) => state.products
  );

  // handling switch
  const handleSwitch = (num) => {
    if (num === 0) {
      setContent(true);
      setColorOne("red");
      setColorTwo("none");
    } else if (num === 1) {
      setContent(false);
      setColorOne("none");
      setColorTwo("red");
    }
  };

  // handle responsive bar
  const handleSidePanel = () => {
    setResponsiveBar(!responsiveBar);
    if (responsiveBar) {
      setDisplay("flex");
      setAnimation("animateOut");
      setSideBar("250px");
      setTextAnimation("fadeIn");
      setTextOpacity("1");
    } else {
      setDisplay("none");
      setSideBar("60px");
      setAnimation("animateIn");
      setTextAnimation("fadeOut");
      setTextOpacity("0");
    }
  };

  // filter category function
  const checkCategory = (categoryType) => {
    if (categoryType === undefined) {
      return "";
    } else {
      setTypeCategory(categoryType);
    }
  };

  // filter city function
  const filterCityHandler = (cityPlace) => {
    if (cityPlace === undefined) {
      return "";
    } else {
      setFilterCity(cityPlace);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    window.scrollTo(0, 0);
    dispatch(getProducts());
  }, [dispatch, error, alert]);

  return (
    <ProductMainContainer>
      <Metadata title="localMart - All Products" />
      {loading ? (
        <Loader />
      ) : (
        <>
          {products && products[0] ? (
            <>
              <ResponsiveBtn onClick={() => handleSidePanel()}>
                <span></span>
                <span></span>
                <span></span>
              </ResponsiveBtn>
              <ProductLeftContainer show={SideBar} animation={animation}>
                <FilterBox view={display}>
                  <InnerBox
                    rwidth="1px"
                    true={colorOne}
                    textAnimation={textAnimation}
                    textOpacity={textOpacity}
                    onClick={() => handleSwitch(0)}
                  >
                    categories
                  </InnerBox>
                  <InnerBox
                    lwidth="1px"
                    false={colorTwo}
                    textAnimation={textAnimation}
                    textOpacity={textOpacity}
                    onClick={() => handleSwitch(1)}
                  >
                    City
                  </InnerBox>
                </FilterBox>
                {content ? (
                  <>
                    {category &&
                      category.map((cate) => (
                        <InnerContainer view={display} key={cate}>
                          <FilterLink
                            textAnimation={textAnimation}
                            textOpacity={textOpacity}
                            onClick={() => checkCategory(cate)}
                          >
                            {" "}
                            {cate}{" "}
                          </FilterLink>
                        </InnerContainer>
                      ))}
                    <InnerContainer view={display}>
                      <FilterLink
                        textAnimation={textAnimation}
                        textOpacity={textOpacity}
                        onClick={() => checkCategory("")}
                      >
                        Remove Filter
                      </FilterLink>
                    </InnerContainer>
                  </>
                ) : (
                  <>
                    {city &&
                      city.map((eachCity) => (
                        <InnerContainer
                          view={display}
                          textAnimation={textAnimation}
                          textOpacity={textOpacity}
                          key={eachCity}
                        >
                          <FilterLink
                            onClick={() => filterCityHandler(eachCity)}
                          >
                            {" "}
                            {eachCity}{" "}
                          </FilterLink>
                        </InnerContainer>
                      ))}
                    <InnerContainer view={display}>
                      <FilterLink onClick={() => filterCityHandler("")}>
                        Remove Filter
                      </FilterLink>
                    </InnerContainer>
                  </>
                )}
              </ProductLeftContainer>
              <ProductRightContainer>
                <ProductTopContainer>
                  <h4>All Products</h4>
                  <SearchSideContainer>
                    <input
                      type="text"
                      placeholder="Search Product"
                      onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    />
                  </SearchSideContainer>
                </ProductTopContainer>
                <ProductCardsContainer>
                  {products &&
                    products
                      .filter(
                        (product) =>
                          product?.name?.includes(query) &&
                          product?.category?.includes(typeCategory) &&
                          product?.shopName?.city?.includes(filterCity)
                      )
                      .map((product) => (
                        <ProductCard product={product} key={product?._id} />
                      ))}{" "}
                </ProductCardsContainer>
              </ProductRightContainer>
            </>
          ) : (
            <NoProductFoundContainer>
              <h1>Couldn't Find Any Products :(</h1>
              <h1>Check Your Internet Connection</h1>
              <h1>or Refresh the Page</h1>
            </NoProductFoundContainer>
          )}
        </>
      )}
    </ProductMainContainer>
  );
};

export default Products;
