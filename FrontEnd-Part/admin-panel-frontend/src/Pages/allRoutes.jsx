import { Routes, Route } from "react-router-dom"
import { Account_Detail } from "./Account_Detail/Account_detail.pages"
import { AdminDashboard } from "./AdminDashboard/AdminDashboard"
import { SignIn } from "./Authenticated/SignIn"
import { Signup } from "./Authenticated/Signup"
import { Add_product } from "./Product_page/Add_product.page"
import { Product_Category } from "./Product_page/Product_category.page"
import { SingleCategory } from "./Product_page/Single_Category.page"
import { Recyle_Product } from "./Recyle_product_pages/Recycle_product.pages"
import { MultiUserPage } from "./User_Pages/MultiUser.pages"
import { SingleUser } from "./User_Pages/SingleUser.page"

function All_Routes() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/Dashboard" element={<AdminDashboard />} />
            <Route path="/Dashboard/account Detail" element={<Account_Detail />} />
            <Route path="/Dashboard/Food Item List" element={<Product_Category />} />
            <Route path="/Dashboard/Food Item List/:id" element={<SingleCategory />} />
            <Route path="/Dashboard/recycle Product" element={<Recyle_Product />}></Route>
            <Route path="/Dashboard/create Product" element={<Add_product />} />
            <Route path="/Dashboard/Multi User" element={< MultiUserPage/>} />
            <Route path="/Dashboard/Single User" element={<SingleUser/>} />
        </Routes>
    )
}

export { All_Routes }