import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdminShops, deleteShop } from "../../../Actions/ShopAction";
import { useAlert } from "react-alert";
import { TableContainer, DeleteBtn, AdvancedLink } from "../DataListStyle";
import Loader from "../../../Layout/Loader/Loader";
import { DELETE_SHOP_RESET } from "../../../Constants/ShopConstants";

const DataListShop = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, shops, loading } = useSelector((state) => state.shops);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteShop
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    if (deleteError) {
      return alert.error(deleteError);
    }
    if (isDeleted) {
      alert.success("Shop Deleted Successfully");
      dispatch({ type: DELETE_SHOP_RESET });
    }
    dispatch(getAdminShops());
  }, [dispatch, error, alert, isDeleted, deleteError]);

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
