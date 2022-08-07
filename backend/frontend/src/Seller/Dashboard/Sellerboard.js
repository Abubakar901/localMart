import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import {
  SellerboardMainContainer,
  TopContainer,
  SellerInnerContainer,
  AmountContainer,
  CircleContainer,
  CircleLinked,
  LineChart,
} from "./SellerboardStyle";
import { useSelector, useDispatch } from "react-redux";
import { getSellerShops } from "../../Actions/ShopAction";
import { getSellerProducts } from "../../Actions/ProductAction";
import { getSellerOrdersExtra } from "../../Actions/OrderAction";
import Metadata from "../../Layout/Metadata";
import { Line } from "react-chartjs-2";
import { Chart, PointElement, LineElement, ArcElement } from "chart.js";

Chart.register(PointElement, LineElement, ArcElement);

const Sellerboard = () => {
  const { totalShops } = useSelector((state) => state.shops);
  const { totalProducts } = useSelector((state) => state.products);
  const { totalAmount, totalOrders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  useEffect(() => {
    dispatch(getSellerShops());
    dispatch(getSellerProducts());
    dispatch(getSellerOrdersExtra());
  }, [dispatch]);

  return (
    <SellerboardMainContainer>
      <Metadata title="localMart - Dashboard(Seller)" />
      <Sidebar />
      <SellerInnerContainer>
        <TopContainer>
          <h2>Seller Dashboard</h2>
        </TopContainer>
        <AmountContainer>
          <p>Total Amount: ₹{totalAmount}</p>
        </AmountContainer>

        <CircleContainer>
          <CircleLinked to="/seller/shops">
            <h6>Shops</h6>
            <p>{totalShops}</p>
          </CircleLinked>

          <CircleLinked to="/seller/products">
            <h6>Products</h6>
            <p>{totalProducts}</p>
          </CircleLinked>

          <CircleLinked to="/seller/products">
            <h6>Orders</h6>
            <p>{totalOrders}</p>
          </CircleLinked>
        </CircleContainer>

        <LineChart>
          <Line data={lineState} />
        </LineChart>
      </SellerInnerContainer>
    </SellerboardMainContainer>
  );
};

export default Sellerboard;
