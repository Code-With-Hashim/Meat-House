import React from "react";
import {Route ,Routes} from 'react-router-dom';
import { CategoryPage } from "../Pages/Category.pages";
import { SingleProductPage } from "../Pages/SignleProduct.pages";
import { SubCategoryPage } from "../Pages/SubCategory.page";

function Router(){

    return <>
        <Routes>
            <Route path="/category/subcategory/:id" element={<SingleProductPage/>}></Route>
            <Route path="/:category" element={<CategoryPage/>}></Route>
            <Route path="/category/:subcategory" element={<SubCategoryPage/>}></Route>
        </Routes>
    </>
}

export {Router};