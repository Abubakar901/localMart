import React, { useState, useEffect } from "react";
import {
  ShopMainContainer,
  ShopLeftContainer,
  ResponsiveBtn,
  LeftContainerHeading,
  FilterLink,
  ShopRightContainer,
  ShopTopContainer,
  SearchSideContainer,
  ShopCardsContainer,
  NoShopFoundContainer,
} from "./ShopStyle";
import ShopCard from "../../Components/ShopCard/ShopCard";
import Metadata from "../../Layout/Metadata";
import { getShops } from "../../Actions/ShopAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Layout/Loader/Loader";
import { useAlert } from "react-alert";

const Shops = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  // responsive variables
  const [display, setDisplay] = useState("none");
  const [responsiveBar, setResponsiveBar] = useState(true);
  const [SideBar, setSideBar] = useState("5%");
  const [animation, setAnimation] = useState("");
  const [textAnimation, setTextAnimation] = useState("");
  const [textOpacity, setTextOpacity] = useState("0");

  const [query, setQuery] = useState("");
  const [genres, setGenres] = useState("");

  const { loading, error, shops, category } = useSelector(
    (state) => state.shops
  );

  // handle type
  const handleType = (shopType) => {
    if (shopType) {
      setGenres(shopType);
    } else {
      setGenres("");
    }
  };

  // handle responsive bar
  const handleSidePanel = () => {
    setResponsiveBar(!responsiveBar);
    if (responsiveBar) {
      setDisplay("flex");
      setAnimation("animateOut");
      setSideBar("220px");
      setTextAnimation("fadeIn");
      setTextOpacity("1");
    } else {
      setDisplay("none");
      setSideBar("50px");
      setAnimation("animateIn");
      setTextAnimation("fadeOut");
      setTextOpacity("0");
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    window.scrollTo(0, 0);
    dispatch(getShops());
  }, [dispatch, error, alert]);

  return (
    <ShopMainContainer>
      <Metadata title="localMart - All Shops" />
      {loading ? (
        <Loader />
      ) : (
        <>
          {shops && shops[0] ? (
            <>
              <ResponsiveBtn onClick={() => handleSidePanel()}>
                <span></span>
                <span></span>
                <span></span>
              </ResponsiveBtn>
              <ShopLeftContainer show={SideBar} animation={animation}>
                <LeftContainerHeading
                  textAnimation={textAnimation}
                  textOpacity={textOpacity}
                  view={display}
                >
                  Filters
                </LeftContainerHeading>
                {category?.map((cate) => (
                  <FilterLink
                    view={display}
                    textAnimation={textAnimation}
                    textOpacity={textOpacity}
                    onClick={() => handleType(cate)}
                    key={cate}
                  >
                    {cate}{" "}
                  </FilterLink>
                ))}

                <FilterLink
                  view={display}
                  textAnimation={textAnimation}
                  textOpacity={textOpacity}
                  onClick={() => handleType()}
                >
                  Remove Filter
                </FilterLink>
              </ShopLeftContainer>
              <ShopRightContainer>
                <ShopTopContainer>
                  <h4>All Shops</h4>
                  <SearchSideContainer>
                    <input
                      type="text"
                      placeholder="Search Shop Name or City"
                      onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    />
                  </SearchSideContainer>
                </ShopTopContainer>
                <ShopCardsContainer>
                  {" "}
                  {shops &&
                    shops
                      .filter(
                        (shop) =>
                          (shop?.city?.includes(query) ||
                            shop?.name?.includes(query)) &&
                          shop?.category?.toLowerCase().includes(genres)
                      )
                      .map((shop) => (
                        <ShopCard key={shop?._id} shop={shop} />
                      ))}{" "}
                </ShopCardsContainer>
              </ShopRightContainer>
            </>
          ) : (
            <NoShopFoundContainer>
              <h1>Couldn't Find Any Shops :(</h1>
              <h1>Check Your Internet Connection</h1>
              <h1>or Refresh the Page</h1>
            </NoShopFoundContainer>
          )}
        </>
      )}
    </ShopMainContainer>
  );
};

export default Shops;
