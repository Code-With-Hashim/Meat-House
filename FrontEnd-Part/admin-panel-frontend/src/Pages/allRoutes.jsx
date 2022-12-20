import { Routes, Route, Navigate } from "react-router-dom"
import { PrivateRoutes } from "../Components/Privateroutes"
import { Account_Detail } from "./Account_Detail/Account_detail.pages"
import { AdminDashboard } from "./AdminDashboard/AdminDashboard"
import { SignIn } from "./Authenticated/SignIn"
import { ReturnSignUp, Signup } from "./Authenticated/Signup"
import { Add_product } from "./Product_page/Add_product.page"
import { Product_Category } from "./Product_page/Product_category.page"
import { SingleCategory } from "./Product_page/Single_Category.page"
import { Recyle_Product } from "./Recyle_product_pages/Recycle_product.pages"
import { MultiUserPage } from "./User_Pages/MultiUser.pages"
import { SingleUser } from "./User_Pages/SingleUser.page"

function All_Routes() {
    return (
        <Routes>
            <Route path="/" element={<ReturnSignUp />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/Dashboard" element={<PrivateRoutes><AdminDashboard /></PrivateRoutes>} />
            <Route path="/Dashboard/account Detail" element={<PrivateRoutes><Account_Detail /></PrivateRoutes>} />
            <Route path="/Dashboard/Food Item List" element={<PrivateRoutes><Product_Category /></PrivateRoutes>} />
            <Route path="/Dashboard/Food Item List/:id" element={<PrivateRoutes><SingleCategory /></PrivateRoutes>} />
            <Route path="/Dashboard/recycle Product" element={<PrivateRoutes><Recyle_Product /></PrivateRoutes>}></Route>
            <Route path="/Dashboard/create Product" element={<PrivateRoutes><Add_product /></PrivateRoutes>} />
            <Route path="/Dashboard/Multi User" element={<PrivateRoutes>< MultiUserPage /></PrivateRoutes>} />
            <Route path="/Dashboard/Single User" element={<PrivateRoutes><SingleUser /></PrivateRoutes>} />
        </Routes>
    )
}

export { All_Routes }