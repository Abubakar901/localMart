import React, { useEffect } from "react";
import {
  TableContainer,
  EditBtn,
  DeleteBtn,
  AdvancedLink,
} from "../DataListStyle";
import { useSelector, useDispatch } from "react-redux";
import { getSellerShops, deleteShop } from "../../../Actions/ShopAction";
import { useAlert } from "react-alert";
import Loader from "../../../Layout/Loader/Loader";
import { DELETE_SHOP_RESET } from "../../../Constants/ShopConstants";
import { useNavigate } from "react-router-dom";

const DataListShop = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, shops, loading } = useSelector((state) => state.shops);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteShop
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    if (deleteError) {
      return alert.error(error);
    }
    if (isDeleted) {
      alert.success("Shop Deleted Successfully");
      dispatch({ type: DELETE_SHOP_RESET });
    }
    dispatch(getSellerShops());
  }, [dispatch, error, alert, isDeleted, deleteError]);

  // edit shop
  const redirectToShopEdit = (id) => {
    navigate(`/seller/shop/${id}`);
  };

  // delete shop
  const deleteShopHandler = (id) => {
    dispatch(deleteShop(id));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <TableContainer>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>City</th>
              <th>State</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shops &&
              shops.map((shop) => (
                <tr key={shop?._id}>
                  <td>
                    <AdvancedLink to={`/shop/${shop?._id}`}>
                      {shop?.name}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/shop/${shop?._id}`}>
                      {shop?.category}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/shop/${shop?._id}`}>
                      {shop?.city}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/shop/${shop?._id}`}>
                      {shop?.state}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/shop/${shop?._id}`}>
                      {shop?.contact}
                    </AdvancedLink>
                  </td>
                  <td>
                    <EditBtn onClick={() => redirectToShopEdit(shop?._id)} />
                    <DeleteBtn onClick={() => deleteShopHandler(shop?._id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
};

export default DataListShop;
