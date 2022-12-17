import { Routes, Route } from "react-router-dom"
import { AdminDashboard } from "./AdminDashboard/AdminDashboard"
import { SignIn } from "./Authenticated/SignIn"
import { Signup } from "./Authenticated/Signup"
import { Product_Category } from "./Product_page/Product_category.page"
import { SingleCategory } from "./Product_page/Single_Category.page"

function All_Routes() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/Dashboard" element={<AdminDashboard />} />
            <Route path="/Dashboard/Food Item List" element={<Product_Category />} />
            <Route path="/Dashboard/Food Item List/:id" element={<SingleCategory />} />
        </Routes>
    )
}

export { All_Routes }