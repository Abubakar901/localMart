import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import {
  AdminboardMainContainer,
  TopContainer,
  AdminInnerContainer,
  AmountContainer,
  CircleContainer,
  CircleMidContainer,
  CircleLinked,
  BarGraphContainer,
} from "./AdminboardStyle.js";
import { useSelector, useDispatch } from "react-redux";
import { getAdminShops } from "../../Actions/ShopAction";
import { getAdminProducts } from "../../Actions/ProductAction";
import { getAdminUsers } from "../../Actions/UserAction";
import { getAdminOrders } from "../../Actions/OrderAction";
import Metadata from "../../Layout/Metadata";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Adminboard = () => {
  const dispatch = useDispatch();

  const { totalShops } = useSelector((state) => state.shops);
  const { totalProducts } = useSelector((state) => state.products);
  const { usersCount } = useSelector((state) => state.users);
  const { totalAmount, totalOrders } = useSelector((state) => state.orders);

  const data = {
    labels: ["Shops", "Products", "Users", "Orders"],
    datasets: [
      {
        label: "# of Votes",
        data: [totalShops, totalProducts, usersCount, totalOrders],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 20,
      },
    },
  };
  useEffect(() => {
    dispatch(getAdminShops());
    dispatch(getAdminProducts());
    dispatch(getAdminUsers());
    dispatch(getAdminOrders());
  }, [dispatch]);

  return (
    <AdminboardMainContainer>
      <Metadata title="localMart - Dashboard(Admin)" />
      <Sidebar />
      <AdminInnerContainer>
        <TopContainer>
          <h2>Admin Dashboard</h2>
        </TopContainer>
        <AmountContainer>
          <p>Total Amount: ₹{totalAmount}</p>
        </AmountContainer>

        <CircleContainer>
          <CircleMidContainer>
            <CircleLinked to="/admin/shops">
              <h6>Shops</h6>
              <p>{totalShops}</p>
            </CircleLinked>

            <CircleLinked to="/admin/products">
              <h6>Products</h6>
              <p>{totalProducts}</p>
            </CircleLinked>
          </CircleMidContainer>

          <CircleMidContainer>
            <CircleLinked to="/admin/orders">
              <h6>Orders</h6>
              <p>{totalOrders}</p>
            </CircleLinked>

            <CircleLinked to="/admin/users">
              <h6>Users</h6>
              <p>{usersCount}</p>
            </CircleLinked>
          </CircleMidContainer>
        </CircleContainer>

        <BarGraphContainer>
          <Bar data={data} options={options} />
        </BarGraphContainer>
      </AdminInnerContainer>
    </AdminboardMainContainer>
  );
};

export default Adminboard;
