import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import MainPageText from "../../component/MainPageText/MainPageText";
import SkeltonLoader from  "../../component/SkeltonLoader/SkeltonLoader";
import ErrorGettingData from "../../component/ErrorGetingData/ErrorGettingData";
import MenuItem from "../../component/MenuItem/MenuItem";
import MarketPng from "../../assets/images/market.png";
import FoodPng from "../../assets/images/food.png";
const Menus = () => {
  const allMenus = useSelector((state) => state.menu.allMenus);
  const isWaitingForGetMenus = useSelector(
    (state) => state.menu.isWaitingForGetMenus
  );
  const errorInGetMenus = useSelector((state) => state.menu.errorInGetMenus);
  
  return (
    <Container fluid>
      <MainPageText text="MENUS" />
      <Container className="container my-5 p-4 bg-white rounded-2 shadow-sm d-flex justify-content-center flex-wrap gap-5">
        {isWaitingForGetMenus ? (
          <SkeltonLoader />
        ) : errorInGetMenus ? (
          <ErrorGettingData />
        ) : (
          allMenus.length > 0 && allMenus.map((e, index) => {
            return (
              <MenuItem
                key={index}
                item={e}
                name={e.name}
                imgSrc={FoodPng}
              />
            );
          })
        )}
      </Container>
    </Container>
  );
};

export default Menus;
