import React, { useEffect } from "react";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNavigation from "./pages/MainNavigation/MainNavigation";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menus from "./pages/Menus/Menus";
import SingleMenu from "./pages/SingleMenu/SingleMenu";
import ContactUs from './pages/ContactUs/ContactUs'
import { getAllMenus } from "./store/menu-actions";

function App() {
  const dispatch = useDispatch();
  const toastToDisplay = useSelector((state) => state.toast.toast);
  const notify = (message, type, close) =>
    toast(message, {
      position: "top-right",
      autoClose: close,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      type: type,
    });
  useEffect(() => {
    if (toastToDisplay.message === "") return;
    notify(toastToDisplay.message, toastToDisplay.type, toastToDisplay.close);
    return () => toast.dismiss();
  }, [toastToDisplay]);


  useEffect(()=>{
    dispatch(getAllMenus())
  },[])
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MainNavigation />,
      children: [
        { path: "", element: <Menus /> },
        { path: "/menu/:id", element: <SingleMenu /> },
        { path: "/contactus", element: <ContactUs /> },
      ],
    },
    {
      path: "/register",
      element: <LoginPage />,
    },
  ]);
  
  return (
    <>
      <RouterProvider router={routers} />;
      <ToastContainer />
    </>
  );
}
export default App;
