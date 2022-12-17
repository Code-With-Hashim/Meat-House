import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "../Pages/Category.pages";
import Homepage from "../Pages/Homepage";
import { SingleProductPage } from "../Pages/SignleProduct.pages";
// import { SubCategoryPage } from "../Pages/SubCategory.page";
import NewAddress from "../Pages/NewAddressPage";
import Address from "../Pages/AddressPage";
import Summary from "../Pages/Summary";

function Router() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/:category/:id"
          element={<SingleProductPage />}
        ></Route>
        <Route path="/:category" element={<CategoryPage />}></Route>
       <Route path="/newaddress"  element={<NewAddress/>}></Route>
       <Route path="/address"  element={<Address/>}></Route>
       <Route path="/summary"  element={<Summary/>}></Route>
      </Routes>
      
    </>
  );
}

export { Router };
