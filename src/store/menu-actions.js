import { menusActions } from "./menusSlice";

export const getAllMenus = () => {
  return async (dispatch) => {
    const getAll = async () => {
      const data = await fetch("http://127.0.0.1:8000/customer/browse_menus");
      const response = await data.json();
      const formattedData = JSON.parse(response.menu_list);
      return formattedData;
    };
    try {
      dispatch(menusActions.setWaitingTrue());
      const data = await getAll();
      dispatch(menusActions.setWaitingFalse());
      dispatch(menusActions.getMenusFromDb(data));
      dispatch(menusActions.clearMenusError());
    } catch (err) {
      console.log(err);
      dispatch(menusActions.setErrorInGetMenus(err));
      dispatch(menusActions.setWaitingFalse());
    }
  };
};

export const AddItemToCart = (customerId , itemId) => {


    console.log(itemId)
    console.log(customerId)
  return async (dispatch) => {
    const getAll = async () => {
       await fetch(
        `http://127.0.0.1:8000/customer/add_item_to_cart/${customerId}/${itemId}/`,
        {
          method: "POST",
          body: JSON.stringify({product_quantity : 1})
          ,
        }
      );
     
    };
    try {
      await getAll();
    } catch (err) {
      console.log(err);
    }
  };
};
